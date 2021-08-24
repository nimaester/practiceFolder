// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
  let maxLength = picture[0].length + 2;
  let topBotBorder = Array(maxLength).fill("*").join("");
  for (let i = 0; i < picture.length; i++) {
    let pic = picture[i];
    picture[i] = "*" + pic + "*";
  }

  picture.push(topBotBorder);
  picture.unshift(topBotBorder);
  return picture;
}
