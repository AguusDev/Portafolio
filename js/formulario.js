const inputs = document.querySelectorAll('.input');
const label = document.querySelector('.label__input');
const formulario = document.querySelector('.formulario');



inputs.forEach( input =>{
    input.addEventListener('focus' , ()=> {
        input.previousElementSibling.classList.add('label__input-active');
        input.classList.add('input__active');
    } )

    input.addEventListener('blur', ()=>{
        /* El previousElementSibling sirve para referenciar al hermano anterior de la etiqueta mencionada en este caso la etiqueta que esta antes del input*/ 
        if (input.value === '') {
            input.previousElementSibling.classList.remove('label__input-active');
        }
        input.classList.remove('input__active');
    })
})

const boton = document.querySelector('.boton-enviar');
const nombre = document.querySelector('.input-name');
const email = document.querySelector('.input-email');
const asunto = document.querySelector('.input-asunto');
const mensaje = document.querySelector('.input-mensaje');

boton.addEventListener( 'click', event =>{
    event.preventDefault();
    if(nombre.value === ''){
        alert('Ingresa un Nombre valido');
    }
    else if(email.value === ''){
        alert('Ingrese un Email valido');
    }
    else if(asunto.value === ''){
        alert('Ingrese un Asunto valido');
    }
    else if(mensaje.value === ''){
        alert('Ingrese un Mensaje valido');
    }else{
        formulario.reset()
    }
})


