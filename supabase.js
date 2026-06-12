import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl =
"https://karkenijctejxgndbwqq.supabase.co";

const supabaseKey =
"sb_secret_44UR9le4NM_yKgC-OszPIg_0BrWP0LY";

export const supabase =
createClient(
  supabaseUrl,
  supabaseKey
);