//*********************CODIGO CUADRADO***********************

console.group("Cuadrado");

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



//*********************CODIGO TRIANGULO***********************

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

//console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladroTriangulo2}cm y ${baseTriangulo}cm`)

console.groupEnd();


//*********************CODIGO CIRCULO***********************


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

//Perimetro
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



///////////////////////****************************************//////////////////////////




//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es: ${perimetro}`);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(`El area del cuadrado es: ${area}`);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLadoA");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLadoB");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(`El perimetro del triangulo es: ${perimetro}`);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);
    const input4 = document.getElementById("InputTrianguloAltura")
    const value4 = Number(input4.value);

    const area = areaTriangulo(value3,value4);
    alert(`El area del triangulo es: ${area}`);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(`El perimetro del circulo es: ${perimetro}`);

}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(`El area del circulo es: ${area} `);

}

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(`El diametro del circulo es: ${diametro} `)
}



function trianguloIsosceles(lado1, lado2, base){
    if (lado1 === lado2){
        alert(`Es un triangulo Isosceles`)
        return Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2))/2)      
    } else {
        return alert("Los dos lados no son iguales") 
    }
}

function calcularAlturaTrianguloisosceles(){
    const input1 = document.getElementById("InputTrianguloLadoA");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLadoB");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);
    
    const trianguloIsosceleAltura = trianguloIsosceles(value1, value2, value3);
    alert(`La altura del Triangulo Isoscele es: ${trianguloIsosceleAltura}`)
}
