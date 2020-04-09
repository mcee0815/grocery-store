// the data.....
// let groceries = [
//     {brand:'Goya',desc:'black beans',type:'canned goods',quantity:23,price:.89},
//     {brand:'uncle bens',desc:'16oz boxed rice',type:'box goods',quantity:43,price:1.99},
//     {brand:'tuscan',desc:'milk',type:'diary',quantity:73,price:3.99},
// ]
//  // save to local storage
//  localStorage.setItem('stock',JSON.stringify(groceries))


//  get the data...
const getStock = () => {
    let stockJSON = localStorage.getItem('stock')
    let stockObj = JSON.parse(stockJSON)
    return stockObj
}
let stock = getStock()

// display the data...
const renderStock = (stock) => {
    stock.forEach(el => {
        // make a dom element for the data
        let stockInfo = document.createElement('p')
        stockInfo.textContent  = `Brand:${el.brand},  Desc:'${el.description}',  Quantity:${el.quantity}`
        document.querySelector('#stock-info').appendChild(stockInfo)
    }); 
}

// create a product...
const addProduct = (stock,product) => {
    stock.push(product)
    localStorage.setItem('stock',JSON.stringify(stock))
}

// let product = {brand:'???',desc:'no desc',type:'na',quantity:0,price:0}
// addProduct(stock,product)

//localStorage.setItem('stock',JSON.stringify(stock))
document.querySelector('#stock-info').innerHTML = ''

// display the data...
renderStock(stock)

// range input display
document.querySelector('#quantity').addEventListener('input',(e) => {
    (document.querySelector('#quant').textContent = e.target.value)
})

// submit the form values
document.querySelector('#the-form').addEventListener('submit',(e) => {
    e.preventDefault()
// store form input values
    let brand = e.target.elements.brand.value
    let description = e.target.elements.description.value
    let quantity = e.target.elements.quantity.value 
    let id = uuidv4()
// create an item object
    let stockItem = {
        brand,
        description,
        quantity,
        id
    }
// clear screen
document.querySelector('#stock-info').innerHTML = ''
// push to stock
    addProduct(stock,stockItem)
    location.reload()
})
