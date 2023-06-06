// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const diceRoller = require('./Components/DiceRoller')

test('is d4 + 2 valid', () => {
    expect(isValidDicestring("d4 + 2")).toBe(true);
});