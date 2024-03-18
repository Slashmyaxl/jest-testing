function caesarCipher(string, shiftFactor) {
    let plainText = string.split('');
    let cipherText = plainText.map(item => cipherChar(item, shiftFactor))

    return cipherText.join('');
}

function cipherChar(char, shiftFactor) {
    if(char === ' ' || char == '!' || char == '?' || char == ',' || char == "'" || char == '.') return char;

    shiftFactor = shiftFactor % 26;
    let cipherCode = char.charCodeAt();
    
    if(char.toUpperCase().charCodeAt() + shiftFactor > 90) cipherCode = cipherCode - 26;

    return String.fromCharCode(cipherCode + shiftFactor);
}


module.exports = caesarCipher