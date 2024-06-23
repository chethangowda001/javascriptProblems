// // function shout(string){
// //     const stringname = string.concat("Fire");
// //     console.log(stringname);
// //     return stringname;
// //     }

// //    const name = shout("Fire");
// //    console.log(name);


// Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged.

// Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.

function shout(string){
    const stringname = string.concat(string);
    console.log(stringname);
    return stringname;
    }
    shout("run");