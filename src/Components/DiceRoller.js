const roll = (diceSize) => {
    return Math.floor(Math.random() * diceSize + 1);

} 

/**
 * 
 * @param {string} input 
 * 
 * checks if string contains 
 */

export function isValidDicestring (input) {
    input.replace(/\s/g,'');
    let result = input.split(/[+-]/);
    console.log(result);

    return true;
}

/**
 * 
 * @param {string} input containing only d4, +, etc 
 * 
 * takes in a string such as d4+10 
 */

const parseRoll = (input) => {
    
}