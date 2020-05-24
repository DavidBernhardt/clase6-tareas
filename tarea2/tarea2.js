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
    let $salarioIntegrantes = obtenerSalarios();
    if ($salarioIntegrantes.length == 0){
        mostrarError ("Todos los salarios son nulos, ingrese valores positivos para continuar");
        return false;
    }

    const $mayorSalario = document.querySelector("#mayor-salario");
    const $menorSalario = document.querySelector("#menor-salario");
    const $promedio = document.querySelector("#promedio");

    $mayorSalario.innerText = `El mayor salario anual es ${mayor($salarioIntegrantes)}`;
    $menorSalario.innerText = `El menor salario anual es ${menor($salarioIntegrantes)}`;
    $promedio.innerText = `El promedio salarial es de ${promedio($salarioIntegrantes)}`;

    mostrar("#calculos");
    return false;
}

function agregarIntegrante(n){
    $salarioIntegrantes = document.querySelector("#salario-integrantes");
    $div = document.createElement("div");
    $div.className = "integrante";
    
    $label = document.createElement("label");
    $label.for = "salario-integrante";
    $label.innerText = `Integrante ${n}: `;

    $input = document.createElement("input");
    $input.id = "salario-integrante";
    $input.type = "number";
    $input.value = "0";

    $div.appendChild($label);
    $div.appendChild($input);

    $salarioIntegrantes.appendChild($div);
    return false;
}   

function removerIntegrante(){
    $salarioIntegrantes = document.querySelectorAll(".integrante");
    $salarioIntegrantes[$salarioIntegrantes.length-1].remove();

    return false;
}

function obtenerSalarios(){
    let $salarioIntegrantes = [];
    const $inputSalarioIntegrantes = document.querySelectorAll(".integrante input");

    $inputSalarioIntegrantes.forEach (function(salario){
        if (validarSalario (salario.value)){
            $salarioIntegrantes.push (Number(salario.value));
        }
    } );

    return $salarioIntegrantes;
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

    salario.forEach (function(salario){
        if (salario < menor){
            menor = salario;
        }
    } );
    return menor;
}

function promedio(salarios){
    let promedio = 0;

    salario.forEach (salario => promedio += salario);

    return (promedio / salarios.length);
}

function validarSalario (salario){
    if (isNaN (salario) || salario === undefined || salario === null){
        mostrarError ("Se ha ingresado un valor incompatible en un campo de salario");
        return false;
    }
    if (! /^0*[1-9][0-9]*$/.test(salario) ){
        mostrarError ("Solo se tienen en cuenta los salarios que sean numeros enteros positivos");
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
