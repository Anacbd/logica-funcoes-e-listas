//Cálculo de IMC
function calculaIMC (altura, peso) {
    let imc = peso / (alturaMetros * alturaMetros);
}

//Cálculo de fatorial
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

//Exemplo de uso:
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}.`); 



//Converter dólar para real
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 5.25; // Exemplo de cotação do dólar
    let valorEmReal = valorEmDolar * cotacaoDolar;
    return valorEmReal.toFixed(2); // Retorna o valor em real com 2 casas decimais  
}

//Exemplo de uso:
let valorDolar = 100;
let valorReal = converterDolarParaReal(valorDolar);
console.log(`$${valorDolar} é equivalente a R$${valorReal}.`);



//Área e perímetro de uma sala retangular
function calcularAreaPerimetroSala(comprimento, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);



//Área e perímetro de uma sala circular
function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);



//Tabuada de um número dado como parâmetro
function mostrarTabuada(numeroTabuada) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numeroTabuada * i;
    console.log(`${numeroTabuada} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numeroTabuada = 7;
mostrarTabuada(numeroTabuada);