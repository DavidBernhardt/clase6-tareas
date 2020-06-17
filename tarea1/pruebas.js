function probarValidarEdad(){
    console.assert (validarEdad(21) === '',
    "validarEdad() ha rechazado una edad positiva valida"
    );
    console.assert (validarEdad(00001) === '',
    "validarEdad() ha rechazado una edad valida iniciada en 0"
    );
    console.assert (validarEdad(-15) === 'Solo se tienen en cuenta las edades como enteros positivos',
    "validarEdad() no ha rechazado una edad negativa"
    );
    console.assert (validarEdad(0) === 'Solo se tienen en cuenta las edades como enteros positivos',
    "validarEdad() no ha rechazado una edad nula"
    );
    console.assert (validarEdad(3.1415) === 'Solo se tienen en cuenta las edades como enteros positivos',
    "validarEdad() no ha rechazado una edad con punto decimal"
    );
    console.assert (validarEdad(NaN) === 'Solo se tienen en cuenta las edades como enteros positivos',
    "validarEdad() no ha rechazado un valor NaN que deberia ser numerico"
    );
    console.assert (validarEdad(null) === 'Solo se tienen en cuenta las edades como enteros positivos',
    "validarEdad() no ha rechazado un valor null que deberia ser numerico"
    );
    console.assert (validarEdad(undefined) === 'Solo se tienen en cuenta las edades como enteros positivos',
    "validarEdad() no ha rechazado un valor undefined que deberia ser numerico"
    );
}
probarValidarEdad();


function probarCalcularPromedio(){
    edadesPrueba = [21, 14, 9, 55, 45];
    
    console.assert (calcularPromedio(edadesPrueba) === 28.8,
        "calcularPromedio() no determino la media de edad correctamente."
    );
}
probarCalcularPromedio();

function probarMayorEdad(){
    console.assert (mayorEdad(edadesPrueba) === 55,
        "mayorEdad() no determino la mayor edad correctamente"
    );
}
probarMayorEdad();

function probarMenorEdad(){
    console.assert (menorEdad(edadesPrueba) === 9,
        "menorEdad() no determino la menor edad correctamente"
    );
}
probarMenorEdad();