function probarValidarEdad(){
    console.assert (validarEdad(21) === true,
    "validarEdad() ha rechazado una edad positiva valida"
    );
    console.assert (validarEdad(00001) === true,
    "validarEdad() ha rechazado una edad valida iniciada en 0"
    );
    console.assert (validarEdad(-15) === false,
    "validarEdad() no ha rechazado una edad negativa"
    );
    console.assert (validarEdad(0) === false,
    "validarEdad() no ha rechazado una edad nula"
    );
    console.assert (validarEdad(NaN) === false,
    "validarEdad() no ha rechazado un valor NaN que deberia ser numerico"
    );
    console.assert (validarEdad(null) === false,
    "validarEdad() no ha rechazado un valor null que deberia ser numerico"
    );
    console.assert (validarEdad(undefined) === false,
    "validarEdad() no ha rechazado un valor undefined que deberia ser numerico"
    );
}
probarValidarEdad();

edadesPrueba = [21, 14, 9, 55, 45];

function probarCalcularPromedio(){
    console.assert (calcularPromedio (edadesPrueba) === 28.8,
        "calcularPromedio() no determino la media de edad correctamente."
    );
}
probarCalcularPromedio();

function probarMayorEdad(){
    console.assert (mayorEdad (edadesPrueba) === 55,
        "mayorEdad() no determino la mayor edad correctamente"
    );
}
probarMayorEdad();

function probarMenorEdad(){
    console.assert (menorEdad (edadesPrueba) === 9,
        "menorEdad() no determino la menor edad correctamente"
    );
}
probarMenorEdad();