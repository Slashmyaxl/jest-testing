const analyzeArray = require('./analyze-array')

test('array of positive integers', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('works with negative integers', () => {
    expect(analyzeArray([1, 3, -4, 3, 4, 13, -6])).toEqual({
        average: 2,
        min: -6,
        max: 13,
        length: 7
    })
})

test('works with decimals', () => {
    expect(analyzeArray([1.5, 3, -4.75, 13, -6])).toEqual({
        average: 1.35,
        min: -6,
        max: 13,
        length: 5
    })
})

test('works with floating decimals', () => {
    expect(analyzeArray([1.533, 3, -4.75, 13, -6])).toEqual({
        average: 1.36,
        min: -6,
        max: 13,
        length: 5
    })
})