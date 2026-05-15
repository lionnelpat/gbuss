import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DbEvent {
  id: string;
  title: string;
  date: string;
  time: string | null;
  location: string | null;
  description: string | null;
  category: "formation" | "evangelisation" | "priere" | "conference";
  attendees: number | null;
  created_at: string;
}

export interface DbAnnouncement {
  id: string;
  title: string;
  content: string;
  active: boolean;
  published_at: string;
}

export interface DbTestimonial {
  id: string;
  name: string;
  email: string | null;
  university: string | null;
  year: string | null;
  type: "text" | "video";
  content: string | null;
  approved: boolean;
  created_at: string;
}
