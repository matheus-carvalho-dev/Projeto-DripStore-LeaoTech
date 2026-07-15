import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const looksLikeSecretKey = (value) => /secret|service_role/i.test(value) || value.startsWith('sb_secret_');

export const supabaseConfigError = looksLikeSecretKey(supabaseAnonKey)
  ? 'Use a chave anon/public do Supabase no frontend. A service role key não pode ser usada no navegador.'
  : '';

export const supabase = supabaseUrl && supabaseAnonKey && !looksLikeSecretKey(supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && !looksLikeSecretKey(supabaseAnonKey));
