// NOTE: Supabase has been removed for now. Form submissions are logged to the
// console and shown as "success" so the site works end-to-end. Swap the body
// of `submitEnquiry` for a call to your database/API once it's ready.

export interface EnquiryData {
  name: string;
  phone: string;
  email: string;
  location: string;
  requirement_type: string;
  message: string;
}

export async function submitEnquiry(data: EnquiryData) {
  // TODO: replace with a real backend call (database, email API, CRM, etc.)
  console.log('New enquiry received:', data);
  return true;
}

export interface UpdatePost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string;
  published_at: string;
}

export async function fetchUpdates(): Promise<UpdatePost[]> {
  // TODO: replace with a real backend call. Returning an empty list keeps the
  // Updates section on the fallback posts defined in Updates.tsx.
  return [];
}
