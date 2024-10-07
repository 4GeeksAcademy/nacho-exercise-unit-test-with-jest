const{sum} = require('./app.js');

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    //const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 125 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(125)).toBe(133.75); 
})

test("One yen should be x dollars", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    //const yen = fromDollarToYen(3.5);

    
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724); 
})

test("One yen should be x pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    //const yen = fromDollarToYen(3.5);

    
    const expected = 3.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665); 
})