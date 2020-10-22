
// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

// Example 1:
// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

// Example 2:
// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

/**

input = array of numbers
output = array of booleans
constraints
edgeCase = if array is empty ?

-we have to find out the greatest number of candies a kid has in the array
-once we have it, we compare each kids candies plus extra candies if its more than or equal to the kid with the highest candies
-each comparison we store the result in an array
-return the result array

 */

var kidsWithCandies = (candies, extraCandies) => {
  let candiesCopy = candies.slice(0);
  let mostCandy = candiesCopy.sort((a, b) => (b - a))[0];
  let result = [];
  for (let i = 0; i < candies.length; i ++) {
    result.push(candies[i] + extraCandies >= mostCandy);
  }
  return result;
}


var kidsWithCandies = function(candies, extraCandies) {
  let mostCandy = Math.max(...candies)
  return candies.map((kidCandy) => (
    kidCandy + extraCandies >= mostCandy
  ))
};

console.log(kidsWithCandies([1,2,3,4,5], 1))