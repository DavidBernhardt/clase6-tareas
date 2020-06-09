let totalIntegrantes = 1;

const $botonAgregar = document.querySelector("#boton-agregar");
$botonAgregar.onclick = function (){
    totalIntegrantes++;
    agregarIntegrante(totalIntegrantes);

    mostrar ("#boton-remover");
    ocultar("#calculos");
    return false;
}

const $botonRemover = document.querySelector("#boton-remover");
$botonRemover.onclick = function(){
    removerIntegrante();
    totalIntegrantes--;

    if (totalIntegrantes == 1){
        $botonRemover.className = "hidden";
    }
    ocultar("#calculos");
    return false;
}

const $botonCalcular = document.querySelector("#boton-calcular")
$botonCalcular.onclick = function(){
    removerErrores ();

    const integrantes = {};
    const $salarioIntegrantes = obtenerSalarios();
    const salariosValidos = [];

    for (let i=0; i<totalIntegrantes; i++){
        integrantes[i] = {
            salario: $salarioIntegrantes[i],
            "error-salario": validarSalario ($salarioIntegrantes[i])
        }

        let error = integrantes[i]["error-salario"];

        if (error){
            mostrarError (error);
        }
        else{
            salariosValidos.push (integrantes[i].salario)
        }
    }

    if (salariosValidos.length === 0){
        mostrarError ("No se ha ingresado ningun salario valido.");
        return false;
    }

    console.log(integrantes);
    console.log (salariosValidos);
    const $mayorSalario = document.querySelector("#mayor-salario");
    const $menorSalario = document.querySelector("#menor-salario");
    const $promedio = document.querySelector("#promedio");

    $mayorSalario.innerText = `El mayor salario anual es ${mayor(salariosValidos)}`;
    $menorSalario.innerText = `El menor salario anual es ${menor(salariosValidos)}`;
    $promedio.innerText = `El promedio salarial es de ${promedio(salariosValidos)}`;

    mostrar("#calculos");
    return false;
}

function agregarIntegrante(n){
    const $form = document.querySelector("#formulario");
    const $div = document.createElement("div");
    $div.className = "integrante";
    
    const $label = document.createElement("label");
    $label.for = `salario-integrante-${n}`;
    $label.innerText = `Integrante ${n}:`;

    const $input = document.createElement("input");
    $input.id = `salario-integrante-${n}`;
    $input.type = "number";
    $input.value = "0";

    $div.appendChild($label);
    $div.appendChild($input);

    $form.appendChild($div);
    return false;
}   

function removerIntegrante(){
    let $salarioIntegrantes = document.querySelectorAll(".integrante");
    $salarioIntegrantes[$salarioIntegrantes.length-1].remove();

    return false;
}

function obtenerSalarios(){
    let arSalarioIntegrantes = [];
    const $listaSalarioIntegrantes = document.querySelectorAll(".integrante input");

    $listaSalarioIntegrantes.forEach (function(salario){
        arSalarioIntegrantes.push (Number(salario.value));
    } );

    return arSalarioIntegrantes;
}

function mayor(salarios){
    let mayor = salarios[0];

    salarios.forEach (function(salario){
        if (salario > mayor){
            mayor = salario;
        }
    } );
    return mayor;
}

function menor(salarios){
    let menor = salarios[0];

    salarios.forEach (function(salario){
        if (salario < menor){
            menor = salario;
        }
    } );
    return menor;
}

function promedio(salarios){
    let promedio = 0;

    salarios.forEach (salario => promedio += salario);

    return (promedio / salarios.length);
}

function validarSalario (salario){
    // if (isNaN (salario) || salario === undefined || salario === null){
    //     return "Se ha ingresado un valor incompatible en un campo de salario";
    // }
    if (! /^0*[1-9][0-9]*$/.test(salario) ){
        return ("Solo se tienen en cuenta los salarios que sean numeros enteros positivos");
    }
    return '';
}

function mostrarError (error){
    const $errores = document.querySelector ("#errores");

    const parrafoError = document.createElement ('p');
    parrafoError.innerText = error;

    $errores.appendChild (parrafoError);
    
    mostrar ("#errores");
}

function removerErrores() {
    const $errores = document.querySelector ('#errores');
    $errores.innerHTML = '';
}

/* function removerErrores() {
    const $errores = document.querySelector ('#errores');

    $errores.forEach (error => $errores.removeChild (error));
} No funciona de esta manera */
 
function mostrar(elemento){
    document.querySelector(elemento).className = "show";
}

function ocultar(elemento){
    document.querySelector(elemento).className = "hidden";
}
