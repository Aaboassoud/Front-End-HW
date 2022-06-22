// Using forEach log out each of my friends but with their name all lower-cased. Use the <str>.toLowerCase() method.
const friends = ["Melissa", "Marc", "Andrew", "Nick"];
friends.forEach(function(friend) {
    console.log("I have a friend named " + friend.toLowerCase());
}); console.log("\n --------------------------")
// _________________________________________________________________________________________________________________


// Create an array that has the numbers of the array numbers squared
// Use an arrow function inside map()
const numbers = [1, 5, 8]
const numbersSquared = numbers.map((num) => num ** 2 );
console.log("[1, 5, 8] square = ",numbersSquared,"\n --------------------------")
// _________________________________________________________________________________________________________________


// Use map to create a new array that adds the string " is awesome" to each element in the array.
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const instructorsAdd = instructors.map((element) => `${element} is awesome`)
console.log("adding \'is awesome\' for each element",instructorsAdd,"\n --------------------------")
// _________________________________________________________________________________________________________________


// Given the array nums try to count the number of even numbers using reduce() and put it in the variable evenNumbers
const nums = [25, 6, 8, 3];
let evenNumbers = 0
nums.reduce((x,y) => {
    if (x %2 == 0 || y %2 == 0) {
    ++evenNumbers      
    }
})
console.log(`even numbers in nums = ${evenNumbers}`,"\n --------------------------")
// _________________________________________________________________________________________________________________


// Filter out all "jerks"!
// Put them in an array called jerks
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter(x => x == 'jerks')
console.log("filter jerks: ",jerks,"\n --------------------------")
// _________________________________________________________________________________________________________________


// 1- Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4
let myFunction = (a, b) => a * b;
const average = (arr) => {
  let cont = 0;
  let sum = 0;
  arr.forEach((element) => {
    cont++, (sum += element);
  });
  return sum / cont;
};
console.log("average of [8, 2, 2, 4] =",average([8, 2, 2, 4]),"\n --------------------------");

// 2- Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"
const reverse = (word) => {
  return word.split("").reverse().join("");
};
console.log(" reverse \"caterpillar\" =", reverse("caterpillar"),"\n --------------------------");
// _________________________________________________________________________________________________________________


// Create an object to store the following information about your favorite movie: 
// title (a string), duration (a number), and stars (an array of strings). 
// Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. 
// Stars: Puff, Jackie, Living Sneezes." Maybe the join method will be helpful here
let Movie = { 
    title: "The Godfather \'1972\',", 
    duration: 175, 
    stars: ["Marlon Brando"," Al Pacino"," James Caan"," Richard S. Castellano"],
    introduce : function(){
        console.log(`\n${this.title} lasted for ${this.duration} minutes. \nStars: ${this.stars}`)
    }
 };
 Movie.introduce()