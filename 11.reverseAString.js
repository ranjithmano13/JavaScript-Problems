const reversedString = (string) => {
    let revStr = "";
    for(let i = string.length-1; i >=0; i--){
        revStr += string[i];
    }
    return revStr
}

console.log(reversedString('I am Batman'))