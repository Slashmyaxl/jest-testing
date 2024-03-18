const capitalize = require('./capitalize.js');

test('first letter capitalized', () => {
    expect(capitalize('getter')).toBe('Getter');
})

test('only first letter capitalized', () => {
    expect(capitalize('MuMBaI')).toBe('Mumbai');
})

test('accept empty string', () => {
    expect(capitalize('')).toBe('');
})

test('accept number in string', () => {
    expect(capitalize('41fl1g4t')).toBe('41fl1g4t')
})

test('works with spaces included', () => {
    expect(capitalize('i am coding')).toBe('I am coding')
})