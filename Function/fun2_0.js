// Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.

// function result(callback){
// callback();
// }


// function a()  {
//     console.log("hello a!");
//     return "Hello a!";
//     }

//      function b() {
//     return "Hello b!";
//     }

//    result(a);
//    result(b);

function result(callback) {
    console.log(callback());
}

function a() {
   
    return "Hello a!";
}

function b() {
    return "Hello b!";
}

result(a);  // This will log "hello a!" followed by "Hello a!"
result(b);  // This will log "Hello b!"
