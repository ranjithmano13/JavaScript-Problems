const missingNum = (arr) =>{
    let result = 0;
    let len = arr.length+1;

    let totalSum = (len*(len+1))/2;

    for(let i = 0; i<arr.length; i++){
        result += arr[i];
    }
    return `The Missing Number is ${totalSum-result}`

}

console.log(missingNum([1,5,6,7,2,3]));