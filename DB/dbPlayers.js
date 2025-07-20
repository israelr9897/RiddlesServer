import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

const db = createClient(process.env.DB_URL, process.env.DB_PUBLIC_SECRET);
if( db){
    console.log("connect to supebase db");
}

export { db };
