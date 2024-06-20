// function getFirstElement(num1){
//     const array = [num1];
//     return array[0];
//     }

//     console.log(getFirstElement(1,2));

function getFirstElement(num1){
    const array = [];
     for(let i=1; i<=num1; i++){
       array.push(i);
       console.log(array);
    }
    return array[0];
    }
    console.log(getFirstElement(5));

