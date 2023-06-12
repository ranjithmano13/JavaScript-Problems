const numbers = [1, 3, 3, 5, 4, 3, 2, 6, 8, 8, 9, 10, 7];

const removeDuplicates = (arr) => {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
        result.push(arr[i])
    }
    obj[arr[i]] = 'I am not a duplicate';
  }
  console.log(obj);
  return result;
};

console.log(removeDuplicates(numbers));
