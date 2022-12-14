// Capturar o evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    console.log(peso, altura);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivel = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivel}).`;

    setResultado(msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];
    
    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc <= 18.5) return nivel[0];
    
}

/*function getImc(peso, altura) {
    const imc = peso / altura**2;
    return imc.toFixed(2);
}*/

const getImc = (peso, altura) => (peso / altura**2).toFixed(2);

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(message, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = message;
    resultado.appendChild(p);
}