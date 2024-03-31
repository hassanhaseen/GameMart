import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqb2p4YW1oaGhvanlnYmN6a3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5MTY1NzEsImV4cCI6MjAyNzQ5MjU3MX0.WXGV6IrpJUCjIIFoNQriUQIecPtJbNVVypVYgiXkxFw"
const supabaseUrl = "https://kjojxamhhhojygbczksl.supabase.co"

const supabase = createClient(supabaseUrl, supabaseKey)

async function signUp() {
  const { data } = await supabase.from('credentials').select();
  console.log(data)

  var username = document.getElementById('username').value
  var display_name = document.getElementById('display_name').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var confirm_password = document.getElementById('confirm_password').value

  await supabase.from("credentials").insert({
    username, display_name, email, password
  });
}


async function signIn() {

  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

  const { data, error } = await supabase
    .from('credentials')
    .select('username')
    .match({ username: username, password: password })

  console.log()
  if (data.length != 0)
    window.location = "store.html"

}

globalThis.signUp = signUp
globalThis.signIn = signIn