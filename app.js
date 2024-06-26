// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


//check if all numbers are divisible by 5
const isDivisible = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(isDivisible);

//let's check if the first number n1 is larger than the last number n4
const isLarger = n1 > n4;
console.log(isLarger);

// let's do some arithmetic. we will subscribe
//first number from the second number.then multiply the 
//result by the third number
//find the remainder of dividing the results by the 4th number.
const someArithm = ((n1 - n2) * n3) / n4;
console.log(someArithm);



// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isUnder25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //EXERCICE #2
  


  //Planninig a road trip, total distance is 1500 miles, let's add the
  // total miles in a variable const totalMiles and total miles per 1 gallon of fuel
  //  in a variable milesPerGallon
  const totalMiles = 1500;
  let milesPerGallon = 30;
  const totalFuel = totalMiles/milesPerGallon;

  //let's check if the budget will be enough.
  //let's put the average cost per gallon in a variable averageCost and
  //the budget in a variable budget.
  const budget = 175;
  const pricePerGallon = 3;
  const isBudgetEnough = budget/pricePerGallon > totalFuel;
  console.log(isBudgetEnough);

// let's check how long will the trip take in hours
//let's put the average mile per hour in a variable averagePerHour
let averagePerHour =55;
const howLong = totalMiles/averagePerHour;


let newAveragePerHour = 60;
const howLong2 = totalMiles/newAveragePerHour;


let thirdAverage = 75;
const howLong3 = totalMiles/thirdAverage;




console.log(howLong);
console.log(howLong2);
console.log(howLong3);

console.log(`It will take us ${howLong}hrs if we drive ${averagePerHour} miles per hour. However, it will take
${howLong2}hrs if we drive ${newAveragePerHour} and finally, it will take us ${howLong3}hrs
on the road if we drive ${thirdAverage} miles per hour. So ${thirdAverage} miles per hour makes more sense for the trip.`);