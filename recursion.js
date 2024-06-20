//process of function calling itself is called recursion

function printNumbersRecursive(n){
   if(n<=10){
    console.log(n);
    printNumbersRecursive(n+1)
   }
}

printNumbersRecursive(1)