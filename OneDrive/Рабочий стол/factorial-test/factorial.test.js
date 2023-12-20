const chai = require('chai');
const assert = chai.assert;
const factorial = require('./factorial');  

describe('Factorial Function', function() {
    it('should return 1 for factorial of 0', function() {
        assert.equal(factorial(0), 1);
    });

    it('should return 1 for factorial of 1', function() {
        assert.equal(factorial(1), 1);
    });

    it('should return the correct factorial for a positive integer', function() {
        assert.equal(factorial(5), 120);
    });

    it('should return 1 for factorial of a negative number', function() {
        assert.equal(factorial(-5), 1);
    });

    it('should return NaN for factorial of a non-integer', function() {
        assert.isNaN(factorial(5.5));
    });
});
