console.group("Cuadrado");
//Codigo Cuadrado
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado){
    return lado * 4
} 


//console.log(`El perimetro del cuadrado miden: ${perimetroCuadrado}cm`);

function areaCuadrado(lado){
    return lado * lado
} 
//console.log(`El area del cuadrado miden: ${areaCuadrado}cm^2`);
console.groupEnd();

console.group("Triangulo");
//Codigo triangulo
/*const ladoTriangulo1 = 6;
const ladroTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`La altura del triangulo mide: ${alturaTriangulo}cm`);*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log(`El perimetro del triangulo miden: ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log(`El area del triangulo miden: ${areaTriangulo}cm^2`);



console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladroTriangulo2}cm y ${baseTriangulo}cm`)


console.groupEnd();

//Codigo circulo
console.group("Circulos");

//Radio
//function radioCirculo(){}
//console.log(`El radio del circulo es: ${radioCirculo}cm`);

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log(`El diametro del circulo es: ${diametroCirculo}cm`);

//PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log(`El perimetro del circulo es: ${parseInt(perimetroCirculo)}cm`);

//Area
function areaCirculo(radio){
    return (radio*radio)* PI
}
//console.log(`El area del circulo es: ${parseInt(areaCirculo)}cm^2`);



console.groupEnd();