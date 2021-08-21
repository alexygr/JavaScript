//1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - Префиксная форма: Сначала увеличивает переменную а на один, потом  присваивает значение (c).
d = b++; alert(d);           // 1 - Постфиксная форма: Сначала присваивать значение переменной b, d. Потом увеличивает b на один
c = (2 + ++a); alert(c);      // 5 - Префиксная форма: a = 2, ++a => a=3, 2 + a => 5
d = (2 + b++); alert(d);      // 4 - Постфиксная форма: b = 2, 2 + b => 4, b++ => b = 3
alert(a);                    // 3 - строка 3: а = 1, строка 4: а = 2, строка 6: а = 3
alert(b);                    // 3 - строка 3: b = 1, строка 5: а = 2, строка 7: а = 3
//Почему код даёт именно такие результаты ?

//2. Чему будет равен x в примере ниже ?

var a = 2;
var x = 1 + (a *= 2); // Сначала выполните действия () => a = 4, Потом прибавится один => x = 5

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
//Затем написать скрипт, который работает по следующему принципу:

//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму;
//ноль можно считать положительным числом.
console.log("задание 3:")
var a = 3;
var b = -1;

if (a >= 0 && b >= 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else if (a * b < 0) {
    console.log(a + b)
};

// 4. Присвоить переменной а значение в промежутке[0..15].
//С помощью оператора switch организовать вывод чисел от a до 15.
console.log("задание 4:")
let num = 11;
function numberCase(num) {
    switch (num) {
        case 1: console.log(1);
        case 2: console.log(2);
        case 3: console.log(3);
        case 4: console.log(4);
        case 5: console.log(5);
        case 6: console.log(6);
        case 7: console.log(7);
        case 8: console.log(8);
        case 9: console.log(9);
        case 10: console.log(10);
        case 11: console.log(11);
        case 12: console.log(12);
        case 13: console.log(13);
        case 14: console.log(14);
        case 15: console.log(15); break;
        default: console.log("Wrong number");
    }

}

console.log(numberCase(num));

// 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
//Обязательно использовать оператор return.
function sum(val1, val2) {
    return val1 + val2;
}
function dif(val1, val2) {
    return val1 - val2;
}
function mult(val1, val2) {
    return val1 * val2;
}
function div(val1, val2) {
    return val1 / val2;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 — значения аргументов, operation — строка с названием операции.
//В зависимости от переданного значения выполнить одну из арифметических операций(использовать функции из пункта 5) 
//и вернуть полученное значение(применить switch).
console.log("задание 6:")
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            console.log(sum(arg1, arg2));
            break;
        case '-':
            console.log(dif(arg1, arg2));
            break;
        case '*':
            console.log(mult(arg1, arg2));
            break;
        case '/':
            console.log(div(arg1, arg2));
            break;
    }
}

console.log(mathOperation(10, 2, "+"));
console.log(mathOperation(10, 2, "-"));
console.log(mathOperation(10, 2, "*"));
console.log(mathOperation(10, 2, "/"));

// 7 * Сравнить null и 0. Объяснить результат.
console.log("задание 7");
console.log(Number(null));
console.log(null > 0); //false Тут понятно - null никак не может быть больше 0
console.log(null == 0); // false В javascript null не преобразуются в число при сравнении 
// Поэтому один тип переменной не может быть равен другому типу
console.log(null === 0); // false Тоже самое что и во втором примере
console.log(Number(null) == 0); // true 
console.log(null >= 0); // true Такой алгоритм javascript. nul <= 0 равен false. Поэтому null >= 0 равен true.



// 8 * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val — заданное число, pow –— степень.
function power(val, pow) {
    // Если степень отрицательная
    if (pow < 0) {
        return 1 / power(val, -pow);
    }
    // Если степени равна нулю
    if (pow == 0) {
        return 1;
    }
    if (pow == 1) {
        return val;
    }
    return val * power(val, pow - 1);
}

console.log("задание 8:")
console.log(power(3, 3));
