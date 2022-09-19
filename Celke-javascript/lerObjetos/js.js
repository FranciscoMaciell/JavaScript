var cadeira={
    cor:'Preta',
    altura:118,
    largura:74,
    profundidade:64
};

document.querySelector('#cor-cadeira').innerHTML=cadeira.cor;

document.querySelector('#altura-cadeira').innerHTML=cadeira.altura;

document.querySelector('#largura-cadeira').innerHTML=cadeira.largura;

document.querySelector('#profundidade-cadeira').innerHTML=cadeira.profundidade;


document.querySelector('#cor-cadeira1').innerHTML=cadeira.cor;

// Apaga um campo do objeto
delete cadeira.cor;

// Insere um campo no objeto
cadeira.peso=20;
cadeira.cor='azul'

document.querySelector('#cor-cadeira2').innerHTML=cadeira.cor;

console.log(cadeira);

var mesa=new Object();

mesa.cor='Preta';
mesa.largura=2.20;

document.getElementById('cor-mesa').innerHTML=mesa.cor;
document.querySelector('#largura-mesa').innerHTML=mesa.largura;