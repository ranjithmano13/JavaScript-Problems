const bubbleSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
  }
  return arr;
  
};

console.log(bubbleSort([10, 8, 6, 9, 1, 4, 3, 2, 5, 7]));

