class Data {
    constructor(dataKey) {
        this.dataKey = dataKey
    }
    getData() {
        let dataJson = localStorage.getItem(this.dataKey)        
        try {
            let dataObj = JSON.parse(dataJson)
            return dataObj
        } catch (error) {
            return []
        }
    }
}

// Data instance
let Stock = new Data('stock')

let stock = Stock.getData()

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
