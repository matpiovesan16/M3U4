const contador = function(){
    document.getElementById("counter").textContent=document.getElementById("contenido").value.length;
}



document.getElementById("contenido").addEventListener("input",contador);