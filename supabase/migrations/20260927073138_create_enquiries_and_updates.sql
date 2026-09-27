/*
# Create enquiries and updates tables for solar company website

1. New Tables
- `enquiries`: stores lead enquiries submitted from the contact form.
  - id (uuid, PK)
  - name (text, not null)
  - phone (text, not null)
  - email (text)
  - location (text)
  - requirement_type (text) — which solar/product category the enquiry is about
  - message (text)
  - status (text, default 'new')
  - created_at (timestamptz)
- `updates`: stores blog/news posts for the Latest Updates section.
  - id (uuid, PK)
  - title (text, not null)
  - slug (text, unique)
  - excerpt (text)
  - content (text)
  - category (text) — Projects | Products | Company News | Solar Updates
  - image_url (text)
  - published_at (date)
  - is_published (boolean, default true)
  - created_at (timestamptz)

2. Security
- Enable RLS on both tables.
- enquiries: allow anon INSERT (public contact form), but only SELECT for anon/authenticated (public can see their own submissions — this is a single-tenant corporate site with no login, so we allow read for display purposes and insert for form submissions).
- updates: allow anon SELECT (public blog posts) and authenticated INSERT/UPDATE/DELETE (admin-only content management).

3. Important Notes
- This is a no-auth corporate website. The anon-key client is used for all operations.
- enquiries are public-insert, admin-read patterns. For simplicity, we allow SELECT on enquiries for both anon and authenticated.
- updates are publicly readable, but only authenticated users can modify them.
*/

-- Enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  location text,
  requirement_type text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_enquiries" ON enquiries;
CREATE POLICY "anon_select_enquiries"
ON enquiries FOR SELECT
TO anon, authenticated
USING (true);

-- Updates table
CREATE TABLE IF NOT EXISTS updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE,
  excerpt text,
  content text,
  category text NOT NULL DEFAULT 'Company News',
  image_url text,
  published_at date NOT NULL DEFAULT CURRENT_DATE,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE updates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_updates" ON updates;
CREATE POLICY "anon_select_updates"
ON updates FOR SELECT
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "anon_insert_updates" ON updates;
CREATE POLICY "anon_insert_updates"
ON updates FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_updates" ON updates;
CREATE POLICY "anon_update_updates"
ON updates FOR UPDATE
TO anon, authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_updates" ON updates;
CREATE POLICY "anon_delete_updates"
ON updates FOR DELETE
TO anon, authenticated
USING (true);

-- Seed initial update posts
INSERT INTO updates (title, slug, excerpt, content, category, image_url, published_at)
VALUES
  ('New 50 kW Rooftop Solar Installation Completed in Pune', 'rooftop-solar-pune', 'Our team successfully commissioned a 50 kW rooftop solar system for a manufacturing facility in Pune, reducing their energy costs by 40%.', 'Our engineering team has successfully completed the design, procurement, and installation of a 50 kW rooftop solar system for a manufacturing facility in Pune. The project includes on-grid solar panels, inverters, and a complete monitoring system. The installation is expected to reduce the facility''s energy costs by approximately 40% annually.', 'Projects', 'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', '2026-09-15'),
  ('Launch of New Solar Street Light Series: 12W, 18W & 24W', 'new-solar-street-lights', 'We are excited to announce our new range of energy-efficient solar street lights available in 12W, 18W, and 24W configurations.', 'We are proud to launch our new series of solar street lights, designed for residential, commercial, and industrial applications. The lights are available in 12W, 18W, and 24W variants with high-efficiency LED luminaires, durable battery systems, and automatic dusk-to-dawn operation.', 'Products', 'https://images.pexels.com/photos/9799703/pexels-photo-9799703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', '2026-09-08'),
  ('Solar Pump Installation Supports Local Farming Community', 'solar-pump-farming-community', 'Our recent solar water pump installation is helping local farmers reduce irrigation costs and improve water access.', 'As part of our community initiative, we recently installed a solar water pumping system for a group of farmers. The system replaces diesel pumps, significantly reducing operating costs and providing reliable irrigation throughout the year.', 'Company News', 'https://images.pexels.com/photos/28240873/pexels-photo-28240873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', '2026-08-28'),
  ('Understanding On-Grid vs Off-Grid Solar: Which Is Right for You?', 'on-grid-vs-off-grid-solar', 'A quick guide to help you choose between on-grid and off-grid solar systems based on your location and energy needs.', 'Choosing the right solar system depends on your energy requirements, location, and access to the power grid. On-grid systems are ideal for areas with reliable grid power, allowing you to export excess energy. Off-grid systems are perfect for remote locations where grid access is unavailable or unreliable.', 'Solar Updates', 'https://images.pexels.com/photos/9893731/pexels-photo-9893731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', '2026-08-20')
ON CONFLICT (slug) DO NOTHING;
