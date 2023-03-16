import { createClient } from "@supabase/supabase-js";
const supabase_Key = process.env.REACT_APP_DB_KEY;
const supabase_Url = process.env.REACT_APP_DB_URL;
const supabse = createClient(supabase_Url, supabase_Key);

export default supabse;