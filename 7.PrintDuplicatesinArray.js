const numbers = [1, 3, 3, 5, 4, 3, 2, 6, 8, 8, 9, 8, 10, 7];

const duplicates = (arr) => {
  let obj = {};
  let duplicate = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] && !duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
    obj[arr[i]] = true;
  }
  return duplicate;
};
console.log(duplicates(numbers));
