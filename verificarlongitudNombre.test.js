const nombres = require('./longitudNombre');

//Empezamos la prueba
// true
test('numero menor de 50 letras',() =>{
    expect (nombres.longitudDeTuNombre("Miguel","Isay","Morales Cortes")).toBe("correcto"); //retorno true
})

// error
test('numero mayor de 50 letras',() =>{
    expect (nombres.longitudDeTuNombre("Miguel","Isay","Morales Cortes De La Rosa Fuentes Verdes")).toBe("error");
})