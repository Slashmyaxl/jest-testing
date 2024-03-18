function analyzeArray(arr) {
    const average = Math.round(arr.reduce((prev, next) => prev + next, 0) / arr.length * 100) / 100
    const min = arr.sort(sortNumbers)[0]
    const max = arr.sort(sortNumbers)[arr.length - 1]
    const length = arr.length;

    return { average, min, max, length }
}

function sortNumbers(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

module.exports = analyzeArray