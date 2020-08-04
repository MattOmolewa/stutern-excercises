/*1. countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.*/
function countdown(time){
    var timerid = setInterval(function(){
      time--;
      if(time <= 0){
        clearTimeout(timerid);
        console.log('DONE!');
      }
      else {
        console.log(timer);
      }
  
    },1000)
  }

  /*2.Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return */
  function randomGame(){
    var num;
    var times = 0;
    var timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " tries to find a number greater than .75.");
      }
    },1000)
  }

  /*3.Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not*/
  function isEven(num){
    return num % 2 === 0;
  }

  /*4.Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not*/
  function isOdd(num){
    return num % 2!==0;
}

/*5.Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false*/
function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

/*6. Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it*/
function numberFact(num, fn){
    return fn(num);
 }

 /*7.Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.*/
 function find(arr, fn){
    for(var i=0; i<arr.length; i++){
      if(fn(arr[i])) 
      return arr[i];
    }
  }

  /*8.Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition*/
  function findIndex(arr, fn){
    for(var i=0; i<arr.length; i++){
      if(fn(arr[i])) 
      return i;
    }
  }

  /*9.●	Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.*/
  function specialMultiply(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  }
  