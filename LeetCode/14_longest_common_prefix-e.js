// 14. Longest Common Prefix

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 //
 //@param {string[]} strs
 //@return {string}
 //
 
const longestCommonPrefix = (strArray) => {
  if (strArray.length === 0){
        return "";
  } else if (strArray.length === 1){
        return strArray[0];
  }
 
 let currentStr = strArray[0];
 
    for (let i = currentStr.length; i >= 0; i--){
        let match = 0;
        for (let j = 1; j < strArray.length; j++){
            if (currentStr === strArray[j].substring(0, i)){
                match++;
            } else {
                continue;
            }
        }
        if (match === strArray.length - 1){
            return currentStr;
        }
        currentStr = currentStr.substring(0, i-1);
    }
};
