
const counter = (string) => {
  let counts = {};
  string.split(" ").join("").toLowerCase().split("").forEach((char) => {
    counts[char] ? counts[char] ++ : counts[char] = 1
  })
  return counts
}

console.log(counter('this is a string This is another stirng'))

const reverse = (string) => {
  let reverse = ""
  const reversal = (string) => {
    if (string.length === 0) {
      return reverse;
    }
    reverse = string[0] + reverse
    return reversal(string.slice(1))
  }

  return reversal(string)
}

console.log(reverse('xurkitree'))

