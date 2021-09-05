
function greet(greeting)
{
    alert(greeting);
}

import { Boton_Login } from './componentes/Boton_Login.js';
var t_Boton_Login = new Boton_Login;
t_Boton_Login.caption = "Login ";
t_Boton_Login.tooltip = "Puedes ingresar con tu cuenta";
t_Boton_Login.onclick = function(){greet('Hola! Ya se quien eres')};
t_Boton_Login.disabled = true;
document.body.appendChild(t_Boton_Login);

import { Boton_Signup } from './componentes/Boton_Signup.js';
var t_Boton_Signup = new Boton_Signup;
t_Boton_Signup.caption = "Signup";
t_Boton_Signup.title = "Puedes crear una cuenta";
t_Boton_Signup.onclick = function(){greet('Hola! Aqui puedes crear tu cuenta')};
t_Boton_Signup.hidden = false;
//t_Boton_Signup.style.backgroundColor = "red";
//t_Boton_Signup.style.color = "yellow";
document.body.appendChild(t_Boton_Signup);