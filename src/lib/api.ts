export interface EnquiryData {
  name: string;
  phone: string;
  email: string;
  location: string;
  requirement_type: string;
  message: string;
  /** Honeypot field — must stay empty; bots tend to fill it. */
  website?: string;
}

// Sends the enquiry to /api/enquiry (api/enquiry.ts), which emails it via Resend.
export async function submitEnquiry(data: EnquiryData) {
  let res: Response;
  try {
    res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error('Could not reach the server. Please check your connection and try again.');
  }

  if (!res.ok) {
    let message = 'Something went wrong. Please try again or call us.';
    try {
      const json = await res.json();
      if (json?.error) message = json.error;
    } catch {
      // response was not JSON — keep the generic message
    }
    throw new Error(message);
  }
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
