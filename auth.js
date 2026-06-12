import { supabase } from "./supabase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

document
.getElementById("btnCadastro")
.addEventListener("click", cadastrar);

document
.getElementById("btnLogin")
.addEventListener("click", login);

async function cadastrar() {

 const { error } =
 await supabase.auth.signUp({

  email: email.value,
  password: password.value

 });

 if(error){
  alert(error.message);
  return;
 }

 alert("Conta criada!");
}

async function login(){

 const { error } =
 await supabase.auth.signInWithPassword({

  email: email.value,
  password: password.value

 });

 if(error){
  alert(error.message);
  return;
 }

 location.href = "album.html";
}