let numeroSecreto = 0 ;
let intentos = 0;
let listaNumeroSorteo = [];
let numeroMaximo = 10

console.log(numeroSecreto);
function asignarElementoTexto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText =texto;
    return;
}
function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //parseInt convierte la funcion en numero 
    console.log(intentos);
    if (numeroDeUsuario == numeroSecreto){
        asignarElementoTexto('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        // el usuario no acerto 
    }else{
        if(numeroDeUsuario>numeroSecreto){
        asignarElementoTexto('p','el numero secreto es menor');

        
    }else{
        if(numeroDeUsuario<numeroSecreto){
        asignarElementoTexto('p','el numero secreto es mayor');
    }
    }
    intentos++;
    limpiarCaja();
    }
    return;
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '' ;
   
   // si ya sortemos todos los numeros 
   if(listaNumeroSorteo.length == numeroMaximo);
   asignarElementoTexto('p', 'ya se generaron todos los numeros posibles');
  
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   
    // si el numero generado ya esta incluido en la lista 
    console.log(numeroGenerado);
    console.log(listaNumeroSorteo);
    if (listaNumeroSorteo.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumeroSorteo.push(numeroGenerado);
        return numeroGenerado;
    }
}
function condicionesIniciales() {
    asignarElementoTexto('h1','juego de numero secreto!');
    asignarElementoTexto('p',`[Indicar numero del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1; 
}
function reiniciarJuego() {
    // limpias caja
    limpiarCaja();
    // limpiar mensajes de intervalos de numeros 
    // generar numero Aleatorio
    // inicializar el nuemro intentos 
    condicionesIniciales();
    // desabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();
