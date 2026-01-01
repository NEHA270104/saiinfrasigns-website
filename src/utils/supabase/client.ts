import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

const supabaseUrl = `https://${projectId}.supabase.co`;

export const supabase = createSupabaseClient(supabaseUrl, publicAnonKey);

// Type definitions for our database tables
export interface ContactInquiry {
  id?: string;
  user_id?: string;
  name: string;
  email: string;
  subject: string;
  phone?: string;
  message?: string;
  created_at?: string;
}