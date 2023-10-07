//(1) referente ao handleFocus
//(2) referente ao handleFocusOut
//(3) referente ao btn 



const inputs = document.querySelectorAll('.input');
/* -> ..All, pois recebe mais de uma classe.
   -> "Inputs" é um array com 2 classes (input0 e input1 do html) 
*/

const button = document.querySelector('.login__button')
/* -> referente ao btn habilitar quando o user e a password tiver mais de 8 caracteres -- (3)
*/

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
/*    A constante "handlefocus" possui um "evento" ao ser clicado(input), o "input" ja é o alvo dela (target), então
      só destrutruar a função com {}, e usar "target".
      Constante "span", vai ter o "target" e vai pegar o elemento irmão anterior, que é o "span" no HTML -- (1)
*/

const handleFocusOut = ({ target }) => {

    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}
/* Mesma coisa da outra, porém aqui, tem um "if", onde se o "input" estiver vazio, 
   o placeholder volta, porém se estiver com algum valor, ele continua no lugar. -- (2)
*/

const handleChange = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8) {
        
        button.removeAttribute('disabled')
        
    } else {
        
        button.setAttribute('disabled', '')

    }
}
/*   Se o "user" e a "password" tiverem valor "maior ou igual á 8", o botão remove o atributo "disabled",
     assim ativando o button.
    Caso não, ele volta o atributo e o botão é desativado. -- (3)
*/ 


inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut)); // função para desfocar o input (2)
inputs.forEach((input) => input.addEventListener('focus', handleFocus));  // função para focar no input (1)
inputs.forEach((input) => input.addEventListener('input', handleChange)); // função para o btn habilitar quando completarmos o login (3)


