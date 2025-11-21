import {
    capitalize,
    reverseString,
    calculator,
    ceasarCipher,
    analyzeArray,
} from './main.js';

describe('capitalize function', () => {
    test('First letter capitalised', () => {
        expect(capitalize('hi')).toBe('Hi');
    });
    test('Rest letters unaffected', () => {
        expect(capitalize('test_word').slice(1)).toBe('est_word');
        expect(capitalize('HeLlO').slice(1)).toBe('eLlO');
    });
});

describe('reverseString function', () => {
    test('String reversed correctly', () => {
        expect(reverseString('test')).toBe('tset');
        expect(reverseString('t  e st')).toBe('ts e  t');
    });
});

describe('calculator object', () => {
    describe('add method', () => {
        test('Should return 3 when adding 1 and 2', () => {
            expect(calculator.add(1, 2)).toEqual(3);
        });
        test('Should handle mixed positive and negative inputs', () => {
            expect(calculator.add(5, -2)).toEqual(3);
        });
        test('Should handle negative inputs', () => {
            expect(calculator.add(-2, -1)).toEqual(-3);
        });
        test('Should return 0 when adding two reverse numbers', () => {
            expect(calculator.add(-2, 2)).toEqual(0);
        });
    });
    describe('subtract method', () => {
        test('should return 1 when calculating 2 minus 1', () => {
            expect(calculator.subtract(2, 1)).toEqual(1);
        });
        test('should return 0 when subtracting a number from itself', () => {
            expect(calculator.subtract(1, 1)).toEqual(0);
        });
        test('should return a negative result when subtracting a larger number', () => {
            expect(calculator.subtract(1, 2)).toEqual(-1);
        });
        test('should handle subtraction of two negative numbers', () => {
            expect(calculator.subtract(-1, -2)).toEqual(1);
        });
    });
    describe('multiply method', () => {
        test('return 2 when multiplying 2 and 1', () => {
            expect(calculator.multiply(2, 1)).toEqual(2);
        });
        test('return a negative result when multiplying a negative with a positive number', () => {
            expect(calculator.multiply(-1, 1)).toEqual(-1);
        });
        test('return a positive when multiplying two negatives', () => {
            expect(calculator.multiply(-1, -2)).toEqual(2);
        });
        test('should return 0 for multiplication with 0', () => {
            expect(calculator.multiply(1, 0)).toEqual(0);
        });
    });
    describe('divide method', () => {
        test('return the number when divided with 1', () => {
            expect(calculator.divide(2, 1)).toEqual(2);
        });
        test('return negative number when dividing mixed numbers', () => {
            expect(calculator.divide(-5, 1)).toEqual(-5);
        });
        test('return a positive when dividing two negatives', () => {
            expect(calculator.divide(-6, -3)).toEqual(2);
        });
        test('get error when dividing with 0', () => {
            expect(() => calculator.divide(1, 0).toThrow());
        });
    });
});

describe('ceasarCipher function', () => {
    test('lowercase letter passed', () => {
        expect(ceasarCipher('hello', 3)).toBe('khoor');
    });
    test('Mixed lower and uppercase pass', () => {
        expect(ceasarCipher('heLlO', 3)).toBe('khOoR');
    });
    test('Punctuation unchanged', () => {
        expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
    test('Wrapping from z to a success', () => {
        expect(ceasarCipher('xyZ', 3)).toBe('abC');
    });
});

describe('analyzeArray function', () => {
    describe('test array [1, 8, 3, 4, 2, 6]', () => {
        const arr = [1, 8, 3, 4, 2, 6];
        const result = analyzeArray(arr);
        test('calculates correct average', () => {
            expect(result.average).toBe(4);
        });
        test('finds minimum value', () => {
            expect(result.min).toBe(1);
        });
        test('finds maximum value', () => {
            expect(result.max).toBe(8);
        });
        test('finds the array length', () => {
            expect(result.length).toBe(6);
        });
    });
});
