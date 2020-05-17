const $ingresarNumeroFamiliares = document.querySelector("#ingresar-numero-familiares");
$ingresarNumeroFamiliares.onclick = function () {
    const $numeroFamiliares = document.querySelector("#numero-familiares").value;
    agregarFamiliares ($numeroFamiliares);
    return false;
}

const $botonCalcular = document.querySelector("#boton-calcular")
$botonCalcular.onclick  = function (){
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
    return false;
}

const $reset = document.querySelector("#reset");
$reset.onclick = function(){
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
        return false;
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
    return false;
}

function obtenerEdades(){
    let edades = [];
    const $inputEdades = document.querySelectorAll(".familiar input");
    
    for (let i=0; i<$inputEdades.length; i++){
        let edad = Number($inputEdades[i].value);
        if (validarEdad (edad)){
            edades.push(edad);
        }
    }
    return edades;
}

function calcularPromedio(edades){
    let sumaEdades = 0;
    for (let i=0; i<edades.length; i++){
        sumaEdades += edades[i];
    }
    const promedio = sumaEdades/edades.length;
    return promedio;
}

function mayorEdad(edades){
    let mayor = edades[0];
    for (let i=0; i<(edades.length-1); i++){
        if (mayor<edades[i+1]){
            mayor = edades[i+1];
        }
    }

    return mayor;
}

function menorEdad(edades){
    let menor = edades[0];
    for (let i=0; i<(edades.length-1); i++){
        if (menor>edades[i+1]){
            menor = edades[i+1];
        }
    }

    return menor;
}

function borrarIntegrantes(){
    const $familiares = document.querySelectorAll(".familiar");
    for (let i=0; i<$familiares.length; i++){
        $familiares[i].remove();
    }
    return;
}

function validarEdad(edad){
    if (isNaN (edad) || edad === undefined || edad === null){
        console.log ("Se ha presentado un valor incompatible en una de las edades");
        return false;
    }
    if (edad <= 0){
        console.log ("Solo se tienen en cuenta las edades positivas");
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




