function probarValidarSalario (){
    console.assert (validarSalario(20000) === true,
    "validarSalario() ha rechazado un valor positivo valido"
    );
    console.assert (validarSalario(00000100) === true,
    "validarSalario() rechazo un salario valido iniciado con cero (=00000100)"
    );
    console.assert (validarSalario(-20000) === false,
    "validarSalario() no ha rechazado un salario negativo"
    );
    console.assert (validarSalario(0) === false,
    "validarSalario() no ha rechazado un salario nulo"
    );
    console.assert (validarSalario(NaN) === false,
    "validarSalario() no ha rechazado un valor NaN que deberia ser numerico"
    );
    console.assert (validarSalario(null) === false,
    "validarSalario() no ha rechazado un valor null que deberia ser numerico"
    );
    console.assert (validarSalario(undefined) === false,
    "validarSalario() no ha rechazado un valor undefined que deberia ser numerico"
    );
}
probarValidarSalario();

salariosPrueba = [50000, 25000, 100000, 75000];

function probarMayor(){
    console.assert (mayor (salariosPrueba) === 100000,
        "mayor() no escogio el mayor salario correctamente"
    );
}
probarMayor();

function probarMenor(){
    console.assert (menor (salariosPrueba) === 25000,
        "menor() no escogio el menor salario correctamente"
    );
}
probarMenor();

function probarPromedio(){
    console.assert (promedio(salariosPrueba) === 62500,
        "promedio() no determino la media salarial correctamente"
    );
}
probarPromedio();
