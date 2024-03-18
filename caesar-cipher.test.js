const caesarCipher = require('./caesar-cipher.js')

test('works with single word', () => {
    expect(caesarCipher('orange', 2)).toBe('qtcpig')
})

test('works with multiple words/spaces', () => {
    expect(caesarCipher('oranges and apples', 5)).toBe('twfsljx fsi fuuqjx')
})

test('wrap from Z to A', () => {
    expect(caesarCipher('zayn is cute', 6)).toBe('fget oy iazk')
})

test('case insensitive', () => {
    expect(caesarCipher('Ziggy plaYeD GuITAr', 2)).toBe('Bkiia rncAgF IwKVCt')
})

test('ignore punctuation', () => {
    expect(caesarCipher('Attack!', 2)).toBe('Cvvcem!')
})

test('happy run', () => {
    expect(caesarCipher("ZorbErT, attACK enemy's fleEt now!", 1)).toBe("ApscFsU, buuBDL fofnz't gmfFu opx!")
})