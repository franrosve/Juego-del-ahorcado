function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(550 + (anchura*i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = "bold 53px Arial";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000000";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 500 + (anchura*index), 600);
    tablero.stroke;
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = "bold 40px Arial";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000000";
    tablero.fillText(letra, 535+(40*(10-errorsLeft)),710,40);

}

//Dibujar ahorcado
function linea1(){
    tablero.beginPath();
    tablero.moveTo(690, 500);
    tablero.lineTo(690, 300);
    tablero.strokeStyle = "#000080"
    tablero.stroke();
    tablero.closePath();
} 

function linea2(){
    tablero.beginPath();
    tablero.moveTo(690, 300);
    tablero.lineTo(850, 300);
    tablero.lineTo(850, 315);
    tablero.strokeStyle = "#000080"
    tablero.stroke();
    tablero.closePath();
}

function cabeza(){
    tablero.beginPath();
    //tablero.moveTo(850, 330);
    tablero.strokeStyle = "#000080"
    tablero.arc(850,335,20,0,2*Math.PI);
    tablero.stroke();
    tablero.closePath();
}

function cuerpo(){
    tablero.beginPath();
    tablero.moveTo(850, 355);
    tablero.lineTo(850, 410);
    tablero.strokeStyle = "#000080"
    tablero.stroke();
    tablero.closePath();
}

function manoIzq(){
    tablero.beginPath();
    tablero.moveTo(850, 375);
    tablero.lineTo(830, 385);
    tablero.strokeStyle = "#000080"
    tablero.stroke();
    tablero.closePath();
}

function manoDer(){
    tablero.beginPath();
    tablero.moveTo(850, 375);
    tablero.lineTo(870, 385);
    tablero.strokeStyle = "#000080"
    tablero.stroke();
    tablero.closePath();
}

function pieIzq(){
    tablero.beginPath();
    tablero.moveTo(850, 410);
    tablero.lineTo(830, 420);
    tablero.strokeStyle = "#000080"
    tablero.stroke();
    tablero.closePath();
}

function pieDer(){
    tablero.beginPath();
    tablero.moveTo(850, 410);
    tablero.lineTo(870, 420);
    tablero.strokeStyle = "#000080"
    tablero.stroke();
    tablero.closePath();
}