import { supabase }
from "./supabase.js";

const album =
document.getElementById("album");

const progresso =
document.getElementById("progresso");

carregarAlbum();

async function carregarAlbum(){

 const {
  data: figurinhas
 }
 =
 await supabase
 .from("figurinhas")
 .select("*");

 album.innerHTML = "";

 figurinhas.forEach(fig => {

  album.innerHTML += `
   <div
   class="bg-white rounded-xl p-3 shadow">

    <img
    src="${fig.imagem_url}"
    class="w-full h-40 object-cover">

    <h3
    class="font-bold mt-2">

    #${fig.numero}
    </h3>

    <p>${fig.nome_jogador}</p>

    <small>
    ${fig.selecao}
    </small>

   </div>
  `;

 });

 progresso.innerText =
 `Total de Figurinhas: ${figurinhas.length}`;
}