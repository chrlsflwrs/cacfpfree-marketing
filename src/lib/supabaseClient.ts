import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/*
 * Browser-only Supabase client for public signup (MKT-1).
 *
 * Publishable/anon key only -- this file must never import or reference a
 * service-role key. Configured against the same Supabase project the CACFP
 * Free app (freecacfp.com) uses, so a session minted here resolves
 * correctly when handed off to POST /api/auth/handoff.
 *
 * Lazily constructed inside getSupabaseClient() rather than at module scope
 * so a missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY
 * (e.g. this build environment, before Netlify's are configured) never
 * breaks the static export build itself -- it only surfaces when a real
 * visitor actually submits the signup form.
 */

let cachedClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (cachedClient) return cachedClient;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Signup is not configured yet (missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY in this build environment)."
    );
  }

  cachedClient = createClient(supabaseUrl, supabaseAnonKey);
  return cachedClient;
}
