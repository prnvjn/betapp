import { createClient } from '@supabase/supabase-js'
const URL = 'https://mkjevcuyjyjefkvszabn.supabase.co';


export const supabase = createClient(URL, process.env.REACT_APP_API_KEY);