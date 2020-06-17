const $ingresarNumeroFamiliares = document.querySelector("#ingresar-numero-familiares");
$ingresarNumeroFamiliares.onclick = function (event) {
    event.preventDefault();

    const $numeroFamiliares = document.querySelector("#numero-familiares").value;
    agregarFamiliares ($numeroFamiliares);
}

const $botonCalcular = document.querySelector("#boton-calcular")
$botonCalcular.onclick  = function (event){
    event.preventDefault();
    
    removerErrores();
    validarFormulario();

    let edades = obtenerEdades();
    
    if (edades.length === 0){
        mostrarTextoError("No se ha ingresado ningun salario válido");
        return false;
    }

    const $menor = document.querySelector("#menor");
    const $mayor = document.querySelector("#mayor");
    const $promedio = document.querySelector("#promedio");

    $menor.textContent = `La menor edad es ${menorEdad(edades)}`;
    $mayor.textContent = `La mayor edad es ${mayorEdad(edades)}`;
    $promedio.textContent = `El promedio de edad es ${calcularPromedio(edades)}`;

    mostrar("#calculos");
}

const $reset = document.querySelector("#reset");
$reset.onclick = function(event){
    event.preventDefault();

    borrarIntegrantes();
    ocultar("#calculos");
    ocultar("#boton-calcular");
    ocultar("#reset");
}

function agregarFamiliares (n){
    if (n<=0){
        alert ("Ingrese un número positivo");
        return;
    }
    ocultar("#calculos");
    borrarIntegrantes();

    const $nodoForm = document.querySelector ('form');
    for (let i=0; i<n; i++){
        const $div = document.createElement("div");
        $div.className = "familiar";
        const $label = document.createElement("label");
        $label.textContent = `Edad del integrante ${i+1}: `;
        const $agregarIntegrante = document.createElement("input");
        $agregarIntegrante.type = "number";
        $agregarIntegrante.className = "edad";
      
        $div.appendChild($label);
        $div.appendChild($agregarIntegrante);

        $nodoForm.appendChild($div);
    }

    mostrar("#reset");
    mostrar("#boton-calcular");
    return;
}

function obtenerEdades(){
    let arEdades = [];
    const $listaEdades = document.querySelectorAll(".edad");
    
    $listaEdades.forEach (function(edad){
        if (! validarEdad(edad.value)){
            arEdades.push(Number(edad.value));
        }
    } ); 
    return arEdades;
}

function validarFormulario(){

    const $edades = document.querySelectorAll(".edad");

    console.log ("Objeto $edades", $edades);

    console.log ("Keys de $edades", Object.keys($edades));

    let errorEdades = [];
    
   $edades.forEach (function(key){           //Aca pensaba poner cada input como un key y el error como value pero no lo logre
    errorEdades.push(validarEdad(key.value));//Por lo que lo hice de esta forma y pase los 2 parametros a manejarErrores()
    console.log("Key de la edad",key);
   } );
    
    console.log ("Errores encontrados:", errorEdades);

    manejarErrores($edades, errorEdades);
}

function validarEdad(edad){
   
    if (! /^0*[1-9][0-9]*$/.test(edad)){
        return "Solo se tienen en cuenta las edades como enteros positivos";
    }

    return '';
}

function manejarErrores($edades, errores){
    
    // let i=0;
    // $edades.forEach (function(key){
    //     if (errores[i]){
    //         key.classList.add('error');
    //         mostrarTextoError(errores[i])
    //     }
    //     else{
    //         key.classList.remove('error');
    //     }
    //     i++;
    // } );
    for (let i=0; i<$edades.length; i++){ //Pinta los sgtes como erroneos aunque esten bien
        if (errores[i]){
            $edades[i].classList.remove('valido');
            $edades[i].classList.add('error');
            mostrarTextoError(errores[i])
        }
        else{
            $edades[i].classList.remove('error');
            $edades[i].classList.add('valido');
        }
    } 

    return;
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
    const $familiares = document.querySelectorAll('.familiar');
    $familiares.forEach (familiar => familiar.remove() );
 
    return;
}

function mostrarTextoError (error){
    const $errores = document.querySelector ('#textos-error');

    const parrafoError = document.createElement ('p');
    parrafoError.innerText = error;

    $errores.appendChild (parrafoError);
    
    mostrar ("#textos-error");
}

function removerErrores() {
    const $errores = document.querySelector ('#textos-error');
    $errores.innerHTML = '';
}

function mostrar(elemento){
    document.querySelector(elemento).className = "show";
}

function ocultar(elemento){
    document.querySelector(elemento).className = "hidden";
}
