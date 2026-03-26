const criatura = document.getElementById("criatura");
const botao = document.getElementById("botao");

const estados = {
    normal: "criatura_fofinha_manga.png",
    puto: "criatura_brava_final.png",
    morto: "criatura_morta_final.png",
    comendo: "criatura_cookie_final.png",
    alimentado: "criatura_feliz_final.png",
}

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador(){
    if(intervalo) clearInterval(intervalo)

        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);

            if(contador == 30){
                criatura.src = estados.puto
            }

            if(contador == 60){
                criatura.src = estados.morto
            }
    }, 1000);
}

function alimentar(){
   criatura.src = estados.comendo
   contador = 0;
   console.log("comeu");

   if(time_click) clearInterval(time_click)
    time_click = setTimeout(() => {
        criatura.src = estados.alimentado  
    time_out = setTimeout(() => {
        criatura.src = estados.normal
    },2000)             
    },1000)
}

controlador()