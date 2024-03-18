const calculator = require('./calculator.js');

test('works with positive integers', () => {
    expect(calculator(4, 2)).toEqual({
        add: 6,
        subtract: 2,
        multiply: 8,
        divide: 2
    })
})

test('works with negative integers', () => {
    expect(calculator(-4, -2)).toEqual({
        add: -6,
        subtract: -2,
        multiply: 8,
        divide: 2
    })
})

test('works with decimals', () => {
    expect(calculator(4.5, -2)).toEqual({
        add: 2.5,
        subtract: 6.5,
        multiply: -9,
        divide: -2.25
    })
})

test('works with floating decimals', () => {
    expect(calculator(4.333, 2.1)).toEqual({
        add: 6.43,
        subtract: 2.23,
        multiply: 9.1,
        divide: 2.06
    })
})