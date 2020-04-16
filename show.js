
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

let stockItemId = location.hash.substring(1)
let item = stock.find((foundItem) => {
    return foundItem.id === stockItemId
})

let brand = document.createElement('p')
    brand.textContent = item.brand

let desc = document.createElement('p')
    desc.textContent = item.description

let quant = document.createElement('p')
    quant.textContent = item.quantity
let itemDiv = document.querySelector('#item')
itemDiv.appendChild(brand)
itemDiv.appendChild(quant)
itemDiv.appendChild(desc)

