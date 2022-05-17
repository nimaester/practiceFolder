const validNum = (a, b) => {
  if (a === b || a - 1 === b || a + 1 === b) return true;
  else return false;
};

function maxTickets(tickets) {
  const sortedTickets = tickets.sort((a, b) => a - b);
  let longestSub = 0;
  let currentLongest = 0;

  let i = 0;
  let j = 1;
  while (i < sortedTickets.length) {
    if (validNum(sortedTickets[i], sortedTickets[j])) {
      currentLongest++;
      i++;
      if (currentLongest > longestSub) longestSub = currentLongest;
    } else {
      currentLongest = 0;
      i = j;
    }
    j = i + 1;
  }
  return longestSub + 1;
}
