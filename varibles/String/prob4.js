// Write a function firstChar, which returns the first character that is not a space when a string is passed.

// Example: firstChar(' Rosa Parks ') should return 'R'.

function firstChar(sring){
    return sring.trim().charAt(0);
    }

    const result = firstChar("chethan");
    console.log(result);