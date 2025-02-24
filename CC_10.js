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
    //Task 4 Implemented Order Management
    placeOrder(orderId, product, quantity) {
        if(product.stock >= quantity) {
            const order = new Order(orderId, product, quantity); // new order
            this.order.push(order); // adds an order
        }
    }
    listOrders (){
        this.orders.forEach(order => console.log(order.getOrderDetails())); // lists the orders 
    }; 
    //Task 5 Implemented Prodcut Restocking
    restockProduct(productId, quantity) {
        const product = this.products.find((prod)=> prod.id === productId); // finds the product
        product.stock += quantity; // Restocks the product
    }
};
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProduct();

inventory.placeOrder(601, prod1, 2);
inventory.listOrders(); // Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400
console.log(prod1.getDetails());// Product: Laptop, ID: 101, Price: $1200, Stock: 3

inventory.restockProduct(101, 5); 
console.log(prod1.getDetails()); // Product: Laptop, ID: 101, Price: $1200, Stock: 8
