function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz"; 
    }else if (num % 3 ===0) {
       return "Fizz";
   } else if (num % 5 ===0) {
       return "Buzz";
   } else {
       return num;
   }
}

// function fizzBuzzWrong(num){
//     if(num % 3 === 0 && num % 5 === 0){
//         return "FizzBuzz"; 
//     }else if (num % 3) {
//       return "Fizz";
//   } else if (num % 5) {
//       return "Buzz";
//   } else {
//       return num;
//   }
// }

// function showModulo(num){
//     return num % 3;
// }


// console.log(showModulo(5));

// console.log(fizzBuzzWrong(3));

console.log(fizzBuzz(15));

function pow(base,power){
   var p = base;
   for (var i=1;i<power;i++)
   {
   	 p *= base;
   }
   return p;
}
console.log(pow(2,3));