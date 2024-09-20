let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generear");
let contraseña =document.getElementById("contrasena");

let caracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*.";

function generar(){
    
    let numerodigitado = parseInt (cantidad.value);
   
    if(numerodigitado < 8){
        alert("la cantidad de caracteres debe ser mayor de 8");
    }
    
    let password = " ";
    for(let i= 0; i<numerodigitado; i++ ){
        let caracteraleatorio= caracteres [Math.floor(Math.random() * caracteres.length)];
        
        password+=caracteraleatorio;
    }
    contraseña.value = password;
};








