const cambiarFondoRojo = function (){
    document.getElementById("body").setAttribute("class","bodyRed");
    

}



const cambiarFondoAzul = function (){
    document.getElementById("body").setAttribute("class","bodyBlue");
    

}


const cambiarFondoVerde = function (){
    document.getElementById("body").setAttribute("class","bodyGreen");
    

}



var cajas= document.getElementsByClassName("caja");

cajas[0].addEventListener('click',cambiarFondoRojo);
cajas[1].addEventListener('click',cambiarFondoAzul);
cajas[2].addEventListener('click',cambiarFondoVerde);