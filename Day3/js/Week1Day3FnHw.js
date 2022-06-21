
//1- Create a function that will get the sum of the numbers between 1 and n and return the answer summation(5)
//should return 15 because 1+2+3+4+5=15


function summation(j) {
    var total = 0;
      for(i = 1; i <= j; i++){
        total += i;
      }
      return total;
  }

console.log(summation(5))

//2- Create a function to get the sum of all the even numbers 
//in a group summationEven(5) should return 6 because 2+4=6

function summationEven(j){
  let total = 0;
  for(i = 1; i <= j; i++)
    {
      if(i % 2 == 0){
      total += i;
    }
    else{ continue }
  }
  return total;
}

console.log(summationEven(5))