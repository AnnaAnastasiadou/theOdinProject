import { normalize } from 'yargs';

const capitalize = (string) => {
    const capitalised = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalised;
};

const reverseString = (string) => {
    return string.split('').reverse().join('');
};

const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    divide: function (num1, num2) {
        return num1 / num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    },
};

const ceasarCipher = (string, shift) => {
    // check if a character is a letter
    const isLetter = (char) => /[a-zA-Z]/.test(char);

    const shiftChar = (char, shiftValue) => {
        if (!isLetter(char)) {
            return char;
        }
        // Get normalized shift - consider negative shifts
        const charCode = char.charCodeAt(0);
        const isUpper =
            charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0);
        const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

        const normalizedShift = ((shiftValue % 26) + 26) % 26;
        // Shift and wrap around the alphabet
        const newCode = ((charCode - base + normalizedShift) % 26) + base;

        return String.fromCharCode(newCode);
    };
    return string
        .split('')
        .map((char) => shiftChar(char, shift))
        .join('');
};

const analyzeArray = (array) => {
    const length = array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const average = array.reduce((sum, curr) => sum + curr, 0) / length;
    return {
        average,
        min,
        max,
        length,
    };
};

export { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };
