// factorial.js
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        return NaN;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

module.exports = factorial;
