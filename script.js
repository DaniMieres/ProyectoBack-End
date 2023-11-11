

var nombre = document.getElementById('nombre')
var correo = document.getElementById('correo')
var telefono = document.getElementById('telefono')
var asunto = document.getElementById('asunto')

function validarFormulario(){
    nombre.addEventListener('input',validarusuario)
    correo.addEventListener('input', validarCorreo)
    telefono.addEventListener('input', validarTelefono)
    asunto.addEventListener('input',validarAsunto)
    validarUsuario()
    validarCorreo()
    validarTelefono()
    validarasunto()
}

function ValidarUsuario(){
    if(nombre.value === ""){
        nombre.setCustomValidity("ingrese un nombre")
    }else{
        nombresetCustomvalidity("")
    }
}

function ValidarCorreo(){
    if(correo.value === ""){
        correo.setCustomValidity("ingrese un correo")
    }else{
        correosetCustomvalidity("")
    }
    if(/\w+@w+\.+[a-z/])
}

function ValidarTelefono(){
    if(telefono.value === ""){
        telefono.setCustomValidity("ingrese un telefono")
    }else{
        telefonosetCustomvalidity("")
    }
}

function ValidarAsunto(){
    if(asunto.value === ""){
        asunto.setCustomValidity("ingrese asunto")
    }else{
        asuntosetCustomvalidity("")
    }
}

window.addEventListener('load',validarFormulario)

const mainTag=document.querySelector('main')

const modalBtn=document.querySelector('button')

const modalInfo=document.createElement('div')

modalInfo.className='box_alert'

modalBtn.addEventListener('click', ()=>{
    mainTag.appendChild(modalInfo)
})

function reloadMyWebPage(){
    location.reload()
}

const facebookLink = document.querySelector('.contact');

facebookLink.addEventListener('click', () => {
 
    const facebookSection = document.querySelector('#facebook-section');

    facebookSection.scrollIntoView({behavior: 'smooth'});
});

const facebookButton = document.querySelector('.social1 button');
const instagramButton = document.querySelector('.social2 button');
const twitterButton = document.querySelector('.social3 button');

facebookButton.addEventListener('click', () => {
 
    window.open('https://www.facebook.com/');
});

instagramButton.addEventListener('click', () => {
 
    window.open('https://www.instagram.com/');
});

twitterButton.addEventListener('click', () => {

    window.open('https://twitter.com/');
});
