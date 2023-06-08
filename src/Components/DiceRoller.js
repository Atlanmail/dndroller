const roll = (diceSize) => {

    //diceSize = parseInt(diceSize)
    return Math.floor(Math.random() * diceSize + 1);

} 


function containsOnlyAllowedValues(str) {
    const regexPattern = new RegExp(`^[0-9 \+\-d]*$`);
    return regexPattern.test(str);
}

function containsCharD(str) {
    const regexPattern = new RegExp(`/d/`);
    return regexPattern.test(str);
} 
/**
 * 
 * @param {string} input 
 * 
 * checks if string is valid dice roller
 */

export function isValidDicestring (input) {
    input = input.replaceAll(/\s/g,'');
    //console.log(input)
    const result = input.split(/[+-]/);
    //console.log(result);

    for (const value of result) {
        if (containsOnlyAllowedValues(value) == false) { /// checks if it contains the allowed values only
            //console.log(value + " 1")
            return false;
        }
        var containsD = false;
        for (var i = 0 ; i < value.length ; i++) { /// checks if it has multiple ds
            if (value.charAt(i) == 'd') {
                if (containsD == true) {
                    //console.log(value + " 2")
                    return false;
                }
                containsD = true;
            }

        }

        if (value.charAt(value.length - 1) == 'd') {
            return false;
        }
    }

    return true;
}

/**
 * 
 * @param {string} input containing only d4, +, integers 
 * 
 * takes in a string such as d4+10 then spits out an output that is all the dice rolled.
 */

export function parseRoll(input) {
    if (isValidDicestring(input) == false) {
        return -1;
      }
    
      var output = 0;
      input = input.replaceAll(/\s/g, '');
    
      const result = input.split(/[+-]/);
      console.log(result);
    
      for (const value of result) {
        var toAdd = 0;
    
        if (containsCharD(value) == false) {
          console.log("Doesn't contain D");
          output += parseInt(value);
          continue;
        }
    
        const splitValue = value.split(/[d]/);
        console.log(splitValue);
    
        if (splitValue.length === 1) {
          // No number of dice rolls specified, default to 1
          toAdd += roll(splitValue[0]);
        } else {
          for (var i = 0; i < splitValue[0]; i++) {
            toAdd += roll(splitValue[1]);
          }
        }
    
        output += toAdd;
        console.log(output);
      }
    
      return output;

}