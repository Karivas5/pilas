//1. Hacer una función que reciba como parámetro una pila y un número.
//La función debe retornar tantos elementos como diga el número (segundo prámetro).
function mifuncion(pila,numero){
    return pila.slice(0,numero);
}
const pila= ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandia','Melon'];
console.log(mifuncion(pila,4));

//2.Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number.
//Dos valores también de tipo Number "nuevo" y "viejo".
//De forma que si el segundo valor aparece en algun lugar de la pila, sea reemplazado por el primero (solo una vez).
//Y hará pop de los elementos más nuevos.
function reemplazar(pila,nuevo,viejo){
    const index = pila.indexOf(viejo);
    if(index !== -1){
        pila[index] = nuevo;
    }
    return pila.slice(0,index+1);
}
const pila2 = [3,2,3,4,6,8,1,2,5,5];
console.log(reemplazar(pila2,7,2));

//3.Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos.
//Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino.
//Muestre el camino recorrido tanto de ida como de vuelta.
function mostrarRecorrido(pueblos){
    const ida= pueblos.join('->');
    const regreso =[...pueblos].reverse().join('->');
    console.log(`Recorrido:${ida}`);
    console.log(`Regreso: ${regreso}`);
}
const pueblos = ['Pueblo origen','pueblo 1','pueblo 2','destino'];
mostrarRecorrido(pueblos);

//4.Unn almacén tiene la capacidad de apilar "n" contenedores.
//Cada contenedor tiene un número de identificación.
//Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él.
//Y colocarlos en otra pila, efectuar el retiro y resguardarlos en su respectivo lugar.
function retirarContenedor(pila,contenedor){
    let pilaTemporal =[];
    let encontrado = false;

    while(pila.length>0){
        const item = pila.pop();
        if(item === contenedor){
            encontrado=true;
            break;
        }else{
            pilaTemporal.push(item);
        }
    }
    while(pilaTemporal.length>0){
        pila.push(pilaTemporal.pop());
    }
    return pila;
}
    const pila3 = [1,2,3,4,5,6,7];
    console.log(retirarContenedor(pila3,4));
