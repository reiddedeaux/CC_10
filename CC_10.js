// Task 1 Created Product Class
class product {
    constructor(name, id, price, stock) {
        this.name = name;//product name
        this.id = id;//profuct id
        this.price = price;//product price
        this.stock = stock; // product stock
    }
    getDetails(){
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`
    }; //details of the product
    updateStock(quantity) {
        this.stock -= quantity; // new stock
    };
};
const prod1 = new product("Laptop", 101, 1200, 10); //Product: Laptop, ID: 101, Price: 1200, Stock: 10
console.log(prod1.getDetails());

prod1.updateStock(3);
console.log(prod1.getDetails()); // Product: Laptop, ID: 101, Price: 1200, Stock: 7
