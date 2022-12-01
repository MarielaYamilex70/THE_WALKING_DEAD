let arreglo_coders = [];
const open_add = document.getElementById('open_add');
const modal_container = document.getElementById('modal_container');
const close_add = document.getElementById('close');
const add_coder = document.getElementById('add');

open_add.addEventListener('click', () => {
    ////////SE ABRE EL MODAL PARA ENTAR LAS CODERS///////
    modal_container.classList.add('show');  
    //alert('Prueba'); 
});  

function cargar_lista_coders(nombres) {
    let lista;
    ////////SE BORRA LA LISTA DE CODERS///////   
    // Eliminando todos los hijos de un elemento UL
    let elemento = document.getElementById("lista_Coders");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

    //////// CARGA LA LISTA DE CODERS ////////
    for (let i = 0 ; i < nombres.length ; i++) {
        lista = document.createElement("li");
        lista.innerHTML = (nombres[i]);
        document.querySelector('#lista_Coders').appendChild(lista);
    }
}

function random_lista_coders(nombres) {
    //console.log(nombre);
    ///////DEVUELVE EL INDICE DEL ARREGLO PARA SACRIFICAR LA CODER //////
    let rand = Math.floor(Math.random() * nombres.length);
    console.log(rand);
    return rand;   
}

close_add.addEventListener('click', () => {
    ////////// CIERRA EL MODAL Y  CARGA LA LISTA DE CODERS//////
    modal_container.classList.remove('show');  
    cargar_lista_coders(arreglo_coders); 
});  

add_coder.addEventListener('click', () => {
    let nombre_coder = document.querySelector('#nombre_coder').value;
    let existe_coder = false;
    if (nombre_coder != ''){
        arreglo_coders.forEach(coder => {
            // SE VALIDA SI EXISTE YA LA CODERS
            if (coder == nombre_coder) existe_coder = true;
           
        });
        if (!existe_coder) { // Si no esta la coders  en el arreglo
            ////////SE ADICIONA LA CODER////////////
            arreglo_coders.push(nombre_coder);
            ///////SE LIMPIA EL INPUT Y EL MENSAJE DE ERROR/////
            document.querySelector('#nombre_coder').value = '';
            document.querySelector('#mensaje_error').textContent = '';
        } else { // Si esta la coders  en el arreglo
            ///////SE GENERA UN MENSAJE DE ERROR/////
            document.querySelector('#mensaje_error').textContent = 'ERROR: Ya existe el coder '+ nombre_coder;
        }
    }
    //alert('Nombre: '+ nombre_coder); 
    console.log(arreglo_coders);

});


close_fin.addEventListener('click', () => {
    ////////// CIERRA POPUP FIN//////
    modal_container_fin.classList.remove('show_fin');  
});  

function sacrificar_coder() {
    let rand; 
    let sacrificada;
    
    if (arreglo_coders.length){
        //alert('Comenzaremos en breve el sacrificio de Coders...');
        ///////SE BUSCA ALEATORIAMENTE LA CODER A SACRIFICAR /////////
        rand = random_lista_coders(arreglo_coders);
        console.log(`posicion aleatoria: ${rand}`);
        sacrificada = arreglo_coders[rand];

        ///////SE SACRIFICA LA CODER//////////
        let removed = arreglo_coders.splice(rand, 1);
        console.log(arreglo_coders); 

        ///////////SE ABRE EL POPUP///////////
        document.getElementById("audio_muerte").play();
        document.querySelector('#mensaje_sacrificio').textContent = `Se ha sacrificado la coder: "${sacrificada}"`;
        modal_container_sacrifica.classList.add('show_sacrifica');  
               
    } else {
        //////////NO HAY LISTA DE CODERS //////////////
        document.querySelector('#mensaje_fin').textContent = 'La última coder ha sido sacrificada';
        document.getElementById("audio_fin").play();
        modal_container_fin.classList.add('show_fin'); 
        console.log('No existe la lista de Coders');
    } 
}

function sayHi() {
    alert('Comenzaremos en breve el sacrificio de Coders...');
}

close_sacrifica.addEventListener('click', () => {
    ////////// CIERRA POPPUP ///////
    modal_container_sacrifica.classList.remove('show_sacrifica'); 
    cargar_lista_coders(arreglo_coders); 
    sacrificar_coder();
});  
  
play.addEventListener('click', () => {
    //setTimeout(sayHi, 1000);
    ///////// COMIENZA EL JUEGO ////////
    sacrificar_coder();
    
});

//setTimeout(() => alert('Hola'), 1000);

// repetir con el intervalo de 2 segundos
//let timerId = setInterval(() => alert('tick'), 2000);

// después de 5 segundos parar
//setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

//setTimeout anidado
//Hay dos formas de ejecutar algo regularmente.
//Uno es setInterval. El otro es un setTimeout anidado, como este:

/** en vez de:
let timerId = setInterval(() => alert('tick'), 2000);
*/
/*
let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
*/

/*
let parrafo = document.getElementById('parrafo');
setTimeout(() => {
    parrafo.textContent += ' y un segundo después hay más contenido';
}, 1000);
<p id='parrafo'>Esto es un texto simple</p>
*/

/*
while(queue.waitForMessage()){
    queue.processNextMessage();
}
*/
