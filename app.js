// the data.....
// let groceries = [
//     {brand:'Goya',desc:'black beans',type:'canned goods',quantity:23,price:.89},
//     {brand:'uncle bens',desc:'16oz boxed rice',type:'box goods',quantity:43,price:1.99},
//     {brand:'tuscan',desc:'milk',type:'diary',quantity:73,price:3.99},
// ]
//  // save to local storage
//  localStorage.setItem('stock',JSON.stringify(groceries))


//  get the data
let stockJSON = localStorage.getItem('stock')
let stock = JSON.parse(stockJSON)

// display the data
stock.forEach(el => {
    // make a dom element for the data
    let stockInfo = document.createElement('p')
    
    stockInfo.textContent  = `Brand:${el.brand},  Desc:'${el.desc}',  Quantity:${el.quantity}`
    
    document.querySelector('#stock-info').appendChild(stockInfo)
    

});
