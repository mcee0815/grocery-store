//  get the data...
const getStock = () => {
    const stockJSON = localStorage.getItem('stock')
    try {
        return JSON.parse(stockJSON)
    } catch (error) {
        return []
    }
}

let stock = getStock()

let stockId = location.hash.substring(1)
let stockItem = stock.find((foundItem) => {
    return foundItem.id === stockId
})
document.querySelector('#item').textContent = stockItem.brand
