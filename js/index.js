//console.log("Hola!!!!!");
//prompt("Escribe un nombre");
//alet("Ok");

let arreglo_coders = [];
//let cont_coders = 0;
const open_add = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close_add = document.getElementById('close');
const add_coder = document.getElementById('add');

open_add.addEventListener('click', () => {
    modal_container.classList.add('show');  
    //alert('Prueba'); 
});  

function cargar_lista_coders(nombres) {
    let lista;
    /*if (nombres.length > 0){
        let el = document.getElementById('lista_Coders');
        let els = el.getElementsByTagName('li');
        let long_els = els.length;
        //vec=[]
        
        for(i=0;i<long_els;i++){
            if(els[i].parentNode==el){
                //vec.push(els[i]);
                console.log(els[i]);
                els[i].remove();
            }    
        }
        //alert(vec.length);
    }*/
   
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
    //let nombre = nombres[(Math.random() * nombres.length) | 0]
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
            //existe_coder = coder == nombre_coder ? true : false ;
            if (coder == nombre_coder) existe_coder = true;
           
        });
        if (!existe_coder) {
            ////////SE ADICIONAN LAS CODERS////////////
            //arreglo_coders[cont_coders] = nombre_coder;
            //cont_coders++;
            arreglo_coders.push(nombre_coder);
            ///////SE LIMPIA EL INPUT Y EL MENSAJE DE ERROR/////
            document.querySelector('#nombre_coder').value = '';
            document.querySelector('#mensaje_error').textContent = '';
        } else {
            ///////SE GENERA UN MENSAJE DE ERROR/////
            document.querySelector('#mensaje_error').textContent = 'ERROR: Ya existe el coder '+ nombre_coder;

        }
        
    }
    //alert('Nombre: '+ nombre_coder); 
    console.log(arreglo_coders);
 
});

function sacrificar_coder(rand) {
    //Se sacrifica la coders
    //setTimeout(() => {
        removed = arreglo_coders.splice(rand, 1);
        console.log(arreglo_coders); 
    //}, 1000);
    
}

function sayHi() {
    alert('Comenzaremos en breve el sacrificio de Coders...');
}
  
play.addEventListener('click', () => {
    //setTimeout(sayHi, 1000);
    let rand; 
    let sacrificada;
    let removed;
    if (arreglo_coders.length){
        while (arreglo_coders.length) {
            alert('Comenzaremos en breve el sacrificio de Coders...');
            //Se busca aleatoriamente la coders a sacrificar
            rand = random_lista_coders(arreglo_coders);
            console.log(`posicion aleatoria: ${rand}`);
            sacrificada = arreglo_coders[rand];
            console.log('Se va a sacrificar la Coders '+ sacrificada); 
            sacrificar_coder(rand);
            //Espera
            //setTimeout(() => sacrificar_coder, 1000);
            
            
        }
    } else {
        console.log('No existe la lista de Coders');
    } 
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
