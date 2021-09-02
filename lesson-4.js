//1. Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999,
//надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
//Например, для числа 245 надо получить следующий объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.
//Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

class Num {
    constructor(number) {
        if (this.checkNumber(number)) {
            this.units = number % 10;
            number = Math.floor(number / 10);
            this.tens = number % 10;
            number = Math.floor(number / 10);
            this.hundreds = number % 10;
        }
    }
    checkNumber(number) {
        number = +number;
        if (number) {
            if (number >= 0 && number < 1000) {
                return number;
            }
        }
        console.log("Invalid number");
        return null;
    }
};


const n = new Num('we3');
const n2 = new Num(123);
const n3 = new Num(1234);
console.log(n);
console.log(n2);
console.log(n3);



// 2. Продолжить работу с интернет - магазином:
//  В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
//  Реализуйте такие объекты.
//  Перенести функционал подсчета корзины на объектно - ориентированную базу.

class Prodact {
    constructor(params) {
        this.name = params.name;
        this.price = params.price;
    }
}

class Korzina {
    constructor() {
        this.prodacts = [];
    }

    addItem(item, quantity) {
        if (quantity) {
            item.quantity = quantity;
            this.prodacts.push(item);
        }

    }
    getSum() {
        let sum = 0;
        console.log('Товар Цена Количество');
        this.prodacts.forEach(key => {
            console.log(key.name + ' ', key.price + '  ', key.quantity);
            sum += key.price * key.quantity;
        });
        console.log("Всего: ", sum);
    }

}

const item1 = new Prodact({ name: 'item1', price: 10 });
const item2 = new Prodact({ name: 'item2', price: 30 });
const item3 = new Prodact({ name: 'item3', price: 20 });
const item4 = new Prodact({ name: 'item4', price: 40 });

const korzina = new Korzina();
korzina.addItem(item1, 3);
korzina.addItem(item2, 2);
korzina.addItem(item3, 4);
korzina.addItem(item4, 5);
korzina.getSum();





//* 3. Подумать над глобальными сущностями.К примеру, сущность «Продукт» в интернет - магазине актуальна не только для корзины, но и для каталога.Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
