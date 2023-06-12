const number = 456;

const sumOfnum = (num) => {
  let arr = num.toString().split("").map(Number);
  return arr.reduce((acc, curr) => {
    let sum = acc + curr;
    if (sum > 10) {
      return sumOfnum(sum);
    } else {
      return sum;
    }
  });
};

console.log(sumOfnum(456));
console.log(sumOfnum(836));
