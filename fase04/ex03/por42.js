function por42(num1, num2){
   let cont = 0;
   
   while (num1 <= num2){
       if (num1%42 === 0){
           cont++;
        if (cont === 2){
            return num1
        }   
       }
       num1 ++
   }
   if (cont === 0 || cont === 1){
       console.log('Não encontrado');
       return false
   } 
   }

