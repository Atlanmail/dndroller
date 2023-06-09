import * as DiceRoller from './DiceRoller.js';

test('is d4 + 2 valid', () => {
    expect(DiceRoller.isValidDicestring("d4 + 2")).toBe(true);
}); 

test('is 44d4 + 2 valid', () => {
    expect(DiceRoller.isValidDicestring( "44d4 + 2")).toBe(true);
}); 
test('is 44d + 2 valid', () => {
    expect(DiceRoller.isValidDicestring("44d + 2")).toBe(false);
}); 

test('is 44dd2 + 2 valid', () => {
    expect(DiceRoller.isValidDicestring("44dd2 + 2")).toBe(false);
});

test ('d6', () => {
    const result = DiceRoller.parseRoll("d6");

    expect(result).toBeDefined();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
    expect(result% 1).toBe(0);

});
 
test ('2d6', () => {
    const result = DiceRoller.parseRoll("2d6");

    expect(result).toBeDefined();
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThanOrEqual(12);
    expect(result% 1).toBe(0);

});

test ('d6 + 4', () => {
    const result = DiceRoller.parseRoll("d6+4");

    expect(result).toBeDefined();
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(10);
    expect(result% 1).toBe(0);

});

test ('5', () => {
    const result = DiceRoller.parseRoll("5");

    expect(result).toBeDefined();
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(5);
    expect(result% 1).toBe(0);

});