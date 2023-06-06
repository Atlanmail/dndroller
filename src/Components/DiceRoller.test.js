import * as DiceRoller from './DiceRoller.js';

test('is d4 + 2 valid', () => {
    expect(DiceRoller.isValidDicestring("d4 + 2")).toBe(true);
}); 