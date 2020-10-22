function capitalizeWords(array) {
  let result = [];

  const capitalizeFirst = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array.length === 0) {
        return;
      }
      let currentEle = array[i];
      result.push(currentEle[0].toUpperCase() + currentEle.slice(1));
      return capitalizeFirst(array.slice(1));
    }
  };
  capitalizeFirst(array);
  return result;
}

console.log(capitalizeWords(["car", "taco", "banana"])); // ['Car','Taco','Banana']
