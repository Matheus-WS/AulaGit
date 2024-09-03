var prompt = require('prompt-sync')();

let senha = prompt('Digite a senha: ');
const temMaiuscula = /[A-Z]/.test(senha);
const temMinuscula = /[a-z]/.test(senha);
const temDigito = /\d/.test(senha);
const temEspecial = /[@#$%^&*()_+!~`\-=}{[\]|;:",<.>/?]/.test(senha);

if (senha.length < 8) {
    resultado = 'Deve ter pelo menos 8 caracteres.'
}
else if (temMaiuscula && temMinuscula && temDigito && temEspecial) {
    resultado = ' É forte.';
} 
else {
    resultado = 'Não é forte. Certifique-se de que a senha tenha pelo menos uma letra maiuscula, uma letra minúscula, um número e um caractere especial';
}

console.log(`Sua senha " ${senha} " ${resultado} `)