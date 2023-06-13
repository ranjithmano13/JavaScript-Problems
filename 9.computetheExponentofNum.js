const result = (base,exp) => {
  if(exp===0) return 1;
  return base * result(base,exp-1)
}

console.log(result(2,4));