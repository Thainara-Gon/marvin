function fizzbuzz(num1, num2) {
     while (num1<= num2){
         if(num1%3 === 0 && num1%5 === 0  ){
         console.log ( num1 + " FizzBuzz")
         }
         else if (num1%3 === 0){
             console.log(num1 + " Fiz")
         }
         else if (num1%5 === 0){
             console.log(num1 + " Buzz")
         }
         else
         console.log(num1);
         num1++
     
     }}

