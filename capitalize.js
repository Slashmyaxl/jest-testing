function capitalize(string) {
    if (!string.length) return '';
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = capitalize;