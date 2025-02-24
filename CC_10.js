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
// Task 2 Created Order Class
class Order {
    constructor(orderId, product, quantity){
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(quantity);
    }
    getOrderDetails(){
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    };
};
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Order ID: 501, Product: Laptop, Qauntity: 2, Total Price: $2400
console.log(prod1.getDetails()); // Product: Laptop, ID: 101, Price: $1200, Stock: 5
//Task 3 Created Inventory Class
class Inventory {
    constructor(){
        this.product = [];
        this.orders = [];
    }
    addProduct(product) {
        this.product.push(product);
    }
    listProduct(){
        this.products.forEach(product => console.log(product.getDetails()));
    }
}