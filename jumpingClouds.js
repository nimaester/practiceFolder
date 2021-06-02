// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

// Example

// Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .

// Function Description

// Complete the jumpingOnClouds function in the editor below.

// jumpingOnClouds has the following parameter(s):

// int c[n]: an array of binary integers
// Returns

// int: the minimum number of jumps required
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// Constraints

// Output Format

// Print the minimum number of jumps needed to win the game.

// Sample Input 0

// 7
// 0 0 1 0 0 1 0
// 4

// you can only jump 1 or 2 spaces in front of the current idx
// you cant land on a 1, only on 0's
// starting point is at idx 0;
// make a variable to store number of jumps
// loop the array, check first if you can make 2 jumps
// if you can then put your current idx there and increment # of jumps
// next check would be if you can make 1 jump, if you can then put your current position there
// when it reaches the end of the array return exit loop
// return # of jumps

const jumpingOnClouds = (arr) => {
  let jumps = 0;
  let i = 0; // position
  while (i < arr.length - 1) {
    if (arr[i + 2] === 0) {
      jumps++;
      i += 2;
    } else if (arr[i + 1] === 0) {
      jumps++;
      i += 1;
    }
  }
  return jumps;
};

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
