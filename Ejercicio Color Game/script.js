//DECLARACIONES
let colores = [];
let squares = document.querySelectorAll(".square");
let pickedColor = document.querySelector("span");
let body = document.body;
body.style.backgroundColor = ["rgb(53, 52, 52)"];
let clickedColor = [];
let juegoSimple = 3;
let juegoDificil = 6;

//FUNCIONES

function changeColors() {  //CAMBIA COLOR CUADRADOS
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickedColorDos() { //ELIGE COLOR ALEATORIO
    for (let i = 0; i < colores.length; i++) {
         pickedColor = colores[Math.floor(Math.random() * colores.length)];       
    }
}

function randomColor() { //ELIGE COLORES ALEATORIOS
    
    for (let i = 0; i < 6; i++) {
        a = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        c = Math.floor(Math.random()*255);
        colores[i] = "rgb(" + a + ", " + b + ", " + c +")";
    }
}

function dificultad(){
    mensaje.style.visibility="hidden";
    if(juegoDificil === 6){
        for (let i = 0; i < 6; i++) {
            a = Math.floor(Math.random()*255);
            b = Math.floor(Math.random()*255);
            c = Math.floor(Math.random()*255);
            colores[i] = "rgb(" + a + ", " + b + ", " + c +")";
        }
    }
    else{
        for (let i = 0; i < 3; i++) {
            a = Math.floor(Math.random()*255);
            b = Math.floor(Math.random()*255);
            c = Math.floor(Math.random()*255);
            colores[i] = "rgb(" + a + ", " + b + ", " + c +")";
        }
    }
}

function colorCuadrados() { //EL JUEGO
    for (let i = 0; i < squares.length && i< colores.length; i++) {
    squares[i].style.backgroundColor = colores[i];    
    squares[i].addEventListener("click", function(){
        console.log(clickedColor = squares[i].style.backgroundColor);
     if (clickedColor != pickedColor) {
            squares[i].style.backgroundColor = body.style.backgroundColor
            mensaje.innerHTML = "<span>Inténtalo nuevamente</span>";
            mensaje.style.visibility="visible";
        } else {
            document.querySelector("h1").style.backgroundColor = pickedColor
            mensaje.innerHTML = "<span>¡Correcto!</span>";
            mensaje.style.visibility = "visible";
            changeColors();
        }       
        })   
    }
}

//BOTONES
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let reset = document.querySelector("#reset");

reset.addEventListener('click', function() {  //RESETEA EL JUEGO
    dificultad();
    colorCuadrados();
    pickedColorDos();
    
});

easy.addEventListener('click', function() {
    juegoSimple = 3
    easy.classList.toggle("selected")
    hard.classList.toggle("selected")
    for (let i = 3; i < 6; i++) {
        squares[i].style.visibility="hidden";
    }
    dificultad();
    pickedColor = colores[Math.floor(Math.random()*3)]
    colorCuadrados()
})

hard.addEventListener('click',function () {
    hard.classList.toggle("selected")
    easy.classList.toggle("selected")
    for (let i = 3; i < 6; i++) {
        squares[i].style.visibility="visible";
    }
    dificultad();
    colorCuadrados();
    pickedColorDos();
})

randomColor();
colorCuadrados();
pickedColorDos();
dificultad()

