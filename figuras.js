console.group("Cuadrado");
//Codigo Cuadrado
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado miden: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado miden: ${areaCuadrado}cm^2`);
console.groupEnd();

console.group("Triangulo");
//Codigo triangulo
const ladoTriangulo1 = 6;
const ladroTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`La altura del triangulo mide: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladroTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo miden: ${perimetroTriangulo}cm`);

const areaTriangulo =(baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo miden: ${areaTriangulo}cm^2`);



console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladroTriangulo2}cm y ${baseTriangulo}cm`)


console.groupEnd();

//Codigo circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm`);

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo}cm`);

//PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del circulo es: ${parseInt(perimetroCirculo)}cm`);

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El area del circulo es: ${parseInt(areaCirculo)}cm^2`);



console.groupEnd();