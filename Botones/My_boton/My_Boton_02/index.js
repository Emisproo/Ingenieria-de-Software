
const c_body = document.getElementById ('_body')
const btnL = document.createElement('button')
btnL.textContent = 'Login';
btnL.title = 'Aquí puedes ingresar a tu cuenta.'
btnL.style.background= 'lightblue'
btnL.style.padding= '10px 15px'
btnL.style.border='2px solid'
btnL.style.borderRadius= '8px'
btnL.style.outline= 'none'
btnL.style.cursor='pointer' 
btnL.onclick = function(){alert('Hola! Ya se quien eres')}
c_body.appendChild(btnL)

const btnS = document.createElement('button')
btnS.textContent = 'Signup';
btnS.title = 'Aquí puedes crear tu cuenta.'
btnS.style.background= 'lightcoral'
btnS.style.padding= '10px 15px'
btnS.style.border='2px solid'
btnS.style.borderRadius= '8px'
btnS.style.outline= 'none'
btnS.style.cursor='pointer' 
btnS.style.marginLeft= '10px'
btnS.onclick = function(){alert('Hola! Has creado tu cuenta')}
c_body.appendChild(btnS)
//ya sé que es una chanchada escribir css acá %|