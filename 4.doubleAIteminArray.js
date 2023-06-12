const items = [
  {
    category: "Electronics",
    id: 1,
    name: "Iphone",
    type: "mobile",
    price: 20000,
  },
  {
    category: "Electronics",
    id: 2,
    name: "Galaxy",
    type: "mobile",
    price: 60000,
  },
  {
    category: "Electronics",
    id: 3,
    name: "LG",
    type: "tv",
    price: 25000,
  },
  {
    category: "Electronics",
    id: 4,
    name: "BlueStar",
    type: "AC",
    price: 40000,
  },
];

const doubleMobilePrice = (arr) => {
    return arr.map((item)=>{
        if(item.type === 'mobile'){
            return {
                ...item,
                price:item.price * 2
            }
        }
        return item;
    })
};

console.log(doubleMobilePrice(items));
