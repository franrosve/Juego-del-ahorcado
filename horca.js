//Selectores
let palabras = ["DESARROLLO", "LENGUAJE", "WEB", "ORDENADOR","ELEFANTE", "LEON", "CODIGO", "MANZANA"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 8;
//PalabraSecreta

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

function comprobarLetra(key){
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado;
    }else{
        estado = true;
        console.log(key);
        return estado;
    }
}

function anandirLetraIncorrecta(){
    errores -= 1;
    console.log(errores);
}


//Iniciar juego
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";

    escojerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);
                }
            }
        }else{
            anandirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
            if(errores == 7){
                linea1();
            }
            if(errores == 6){
                linea2();
            }
            if(errores == 5){
                cabeza();
            }
            if(errores == 4){
                cuerpo();
            }
            if(errores == 3){
                manoIzq();
            }
            if(errores == 2){
                manoDer();
            }
            if(errores == 1){
                pieIzq();
            }
            if(errores <= 0){
                pieDer();
                document.write("Fin del juego.<br>La palabra secreta era: " + palabraSecreta);
                
            }
        }
    }
}
