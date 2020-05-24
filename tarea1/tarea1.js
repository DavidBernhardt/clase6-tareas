const $ingresarNumeroFamiliares = document.querySelector("#ingresar-numero-familiares");
$ingresarNumeroFamiliares.onclick = function (event) {
    event.preventDefault();

    const $numeroFamiliares = document.querySelector("#numero-familiares").value;
    agregarFamiliares ($numeroFamiliares);
}

const $botonCalcular = document.querySelector("#boton-calcular")
$botonCalcular.onclick  = function (event){
    event.preventDefault();

    let edades = obtenerEdades();
    const $menor = document.querySelector("#menor");
    const $mayor = document.querySelector("#mayor");
    const $promedio = document.querySelector("#promedio");

    $menor.textContent = `La menor edad es ${menorEdad(edades)}`;
    $mayor.textContent = `La mayor edad es ${mayorEdad(edades)}`;
    $promedio.textContent = `El promedio de edad es ${calcularPromedio(edades)}`;

    mostrar("#menor");
    mostrar("#mayor");
    mostrar("#promedio");
}

const $reset = document.querySelector("#reset");
$reset.onclick = function(event){
    event.preventDefault();

    borrarIntegrantes();
    ocultar("#promedio");
    ocultar("#menor");
    ocultar("#mayor");
    ocultar("#boton-calcular");
    ocultar("#reset");
}

function agregarFamiliares (n){
    if (n<=0){
        alert ("Ingrese un número positivo");
        return;
    }
    ocultar("#menor");
    ocultar("#mayor");
    ocultar("#promedio");
    borrarIntegrantes();

    const $nodoForm = document.querySelector ('form');
    for (let i=0; i<n; i++){
        const $div = document.createElement("div");
        $div.className = "familiar";
        const $label = document.createElement("label");
        $label.textContent = `Edad del integrante ${i+1}: `;
        const $agregarIntegrante = document.createElement("input");
        $agregarIntegrante.type = "number";
      
        $div.appendChild($label);
        $div.appendChild($agregarIntegrante);

        $nodoForm.appendChild($div);
    }

    mostrar("#reset");
    mostrar("#boton-calcular");
    return;
}

function obtenerEdades(){
    let edades = [];
    const $inputEdades = document.querySelectorAll(".familiar input");
    
    $inputEdades.forEach (function(edad){
        if (validarEdad (edad.value)){
            edades.push( Number(edad.value));
        }
    } ); 
    return edades;
}

function calcularPromedio(edades){
    let sumaEdades = 0;

    edades.forEach (edad => sumaEdades += edad);

    return sumaEdades/(edades.length);
}

function mayorEdad(edades){
    let mayor = edades[0];

    edades.forEach (function(edad){
        if (mayor < edad){
            mayor = edad;
        }
    } );

    return mayor;
}

function menorEdad(edades){
    let menor = edades[0];
    
    edades.forEach (function(edad){
        if (menor > edad){
            menor = edad;
        }
    } );

    return menor;
}

function borrarIntegrantes(){
    const $familiares = document.querySelectorAll(".familiar");
    $familiares.forEach (familiar => familiar.remove() );
 
    return;
}

function validarEdad(edad){
    if (isNaN (edad) || edad === undefined || edad === null){
        console.log ("Se ha presentado un valor incompatible en una de las edades");
        return false;
    }
    if (! /^0*[1-9][0-9]*$/.test(edad)){
        console.log ("Solo se tienen en cuenta las edades como enteros positivos");
        return false;
    }

    return true;
}

function mostrar(elemento){
    document.querySelector(elemento).className = "show";
}

function ocultar(elemento){
    document.querySelector(elemento).className = "hidden";
}
