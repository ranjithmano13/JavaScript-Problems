const findSum = (arr, num) => {
  let obj = {};
  let diff;
  for (let i = 0; i < arr.length; i++) {
    diff = num - arr[i];
    if(obj[diff]){
        return true;
    }
    obj[arr[i]] = 'I am the value for this key'
  }
  return false;
};

console.log(findSum([2,6,8,21],30));
console.log(findSum([2,6,8,21],23));