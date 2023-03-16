import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vwnvvsmjitnwqeexzhfz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bnZ2c21qaXRud3FlZXh6aGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4ODk0MjQsImV4cCI6MTk5NDQ2NTQyNH0.cmCuiMpQghc_NzrxQp8T-Z3OJ0RSnUChsPFyIjrcvgs"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase