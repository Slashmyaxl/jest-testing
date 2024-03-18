const reverseString = require('./reverse-string.js')

test('works with single word', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('works with multiple words', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
})

test('works with numbers included', () => {
    expect(reverseString('h3770 d4rkn355')).toBe('553nkr4d 0773h')
})

test('works with punctuation included', () => {
    expect(reverseString('...my old friend...')).toBe('...dneirf dlo ym...')
})

test('works with empty string', () => {
    expect(reverseString('')).toBe('')
})