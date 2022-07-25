const checkIfEqual = require('../lib/random.js');

TextDecoderStream('checks it 10 is equal to 10', () => {
    expect(checkIfEqual(10, 10)).toBe(true);
})