// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
console.log("task 1")
let num = 1;

nextNum: while (num < 100) {
    num++;
    let j = 2;
    while (j < num / 2) {
        if (num % j == 0) {
            continue nextNum;
        }
        j++
    }
    console.log(num);
}

// 2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве.
// Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
console.log("task 2, 3")

let mass = [
    ["item1", 100],
    ["item2", 121],
    ["item3", 254],
    ["item4", 654],
]

function countBasketPrice(basket) {
    let sum = 0;
    for (i in basket) {
        sum += basket[i][1];
    }
    return sum;
}

console.log(countBasketPrice(mass));

// 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.Выглядеть это должно так:

// for (…) {// здесь пусто}
console.log("task 4")
for (let i = 0; i < 10; console.log(i++)) { }



// 5. * Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
console.log("task 5")
for (let i = 0; i < 20; i++) {
    let st = 'x';
    for (j = 0; j < i; j++) {
        st = st + 'x';
    }
    console.log(st);
}