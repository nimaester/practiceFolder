const str = "this is your example string";
const smallStr = "this";
const files = "file1.mp3 file2.mpe txt.txt files3.csv";

const reg = /exam/;

// console.log(reg.test(str));
// console.log(/exam/.test(str));

/*

^   used to specify start of the string that matches the condition
$   used to specify the end of the string that matches the condition
[a-z], [A-Z] match a single char from a-z, you can specify which letter you want. useful for vowels? [aeiou]
[0-9] match a single interger from 0-9. Same as [a-z] specify which number you specifically want
?   can be used as an optional character
{1,3} range of length of chars that you want after the []

*/

// console.log(/^this$/.test(smallStr));

// console.log(/[aeiou1]/.test("shyn1"));
console.log(/this is your [0-9]/.test(str));
let data = /(file)/.exec(files);
console.log(data);
