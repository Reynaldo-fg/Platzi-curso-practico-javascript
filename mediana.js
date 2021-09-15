function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [
    250,
    430,
    740,
    150,
    350,
    90,
];

function medianAritmetica(lista1){
    const listaOrdenada = lista1.sort((a, b) =>{
        return a - b;
    });
    
    const mitadLista1 = parseInt(lista1.length / 2);
    
    const esPar = (numerito) => {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    let mediana; 
    
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1];
        const elemento2 = lista1[mitadLista1 - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2, 
        ]);
    
        return mediana = promedioElemento1y2
    } else {
        return mediana = lista1[mitadLista1];
    }
}

medianAritmetica(lista1);


