'use strict'
class Product {
    constructor(params) {
        this.name = params.name;
        this.price = params.price;
    }
    showProducts(element) {
        const name = document.createElement('DIV');
        name.textContent = 'Имя: ' + this.name;
        name.style.width = '100px'
        name.style.display = 'inline-block'
        const price = name.cloneNode(true);
        price.textContent = 'Цена: ' + this.price;
        element.appendChild(name);
        element.appendChild(price);
        return element;
    }
}

class Catalog {
    constructor() {
        this.products = [];
    }
    addItem(item) {
        this.products.push(item);
    }
    getItems(element) {
        this.products.forEach(key => {
            const item = document.createElement('DIV');
            element.appendChild(key.showProducts(item));
        })
        return element;
    }


}
class Cart {
    constructor() {
        this.products = [];
        this.sum = 0
        this.quantity = 0
    }

    addItem(item, quantity) {
        if (quantity) {
            item.quantity = quantity;
            this.products.push(item);
            this.sum += item.price * quantity;
            this.quantity += quantity;
        }

    }
    getSum(element) {
        let h4 = document.createElement('H4');
        if (this.quantity) {
            h4.textContent = 'Товар Цена Количество';
        }
        else {
            h4.textContent = 'корзина пуста';
            element.appendChild(h4);
            return;
        }
        element.appendChild(h4);
        this.products.forEach(key => {
            let cart = document.createElement('DIV');
            const quantity = document.createElement('DIV');
            quantity.textContent = 'Количество: ' + key.quantity;
            quantity.style.width = '150px'
            quantity.style.display = 'inline-block'
            cart = key.showProducts(cart);
            cart.append(quantity);
            element.appendChild(cart);
        });
        h4 = document.createElement('H4');
        h4.textContent = `В корзине ${this.quantity} товаров на сумму ${this.sum} на сумму`
        element.appendChild(h4)
        return element;
    }



}

const item1 = new Product({ name: 'item1', price: 10 });
const item2 = new Product({ name: 'item2', price: 30 });
const item3 = new Product({ name: 'item3', price: 20 });
const item4 = new Product({ name: 'item4', price: 40 });
const item5 = new Product({ name: 'item5', price: 60 });
const item6 = new Product({ name: 'item6', price: 80 });
const item7 = new Product({ name: 'item7', price: 90 });

const cart = new Cart();
cart.addItem(item1, 3);
cart.addItem(item2, 2);
cart.addItem(item3, 4);
cart.addItem(item4, 5);
cart.getSum(task2);

const cat = new Catalog();
cat.addItem(item1);
cat.addItem(item2);
cat.addItem(item3);
cat.addItem(item4);
cat.addItem(item5);
cat.addItem(item6);
cat.addItem(item7);

const catalog = document.querySelector('#catalog');
catalog.appendChild(cat.getItems(document.createElement('div')));
