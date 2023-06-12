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

  const totalPriceofMobile = (arr) => {
   const filterMobile = arr.filter((item)=> {
    if(item.type === 'mobile'){
        return item;
    }
   })
   const mobilePrice = filterMobile.reduce((acc,curr)=>{
    return acc.price + curr.price;
   })
   return mobilePrice;

  }

  console.log(totalPriceofMobile(items));