// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (aNum, bNum) =>{
    const result = aNum * bNum;
    return result;
}
console.log(square (3, 4))
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let round = (radius) =>{
    return Math.PI * radius * radius
}
console.log(round (5))
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом

let squareCilinder = (radius, height) =>{
    return 2 * Math.PI * radius * height
}
console.log(squareCilinder(10, 40));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
toysArray = ['dog', 'cat', 'han']
let users = (array) =>{
    for (const item of array) {
        console.log(item);
    }
}
users(toysArray);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
let indexFunction = (text) =>{
    document.write(`<p>${text}</p>`)
}
indexFunction('Lesson')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
let index = (text) =>{
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
index('Document')

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

let main = (text, count) =>{
    document.write('<ul>')
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>')
}
main('Lesson', 10);


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let about = (numberArray) =>{
    document.write('<ul>')
    for (const item of numberArray) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>')
}
about([22, 45, 55, 10, 'dog', false]);


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//

let list = (usersArea) =>{
    for (const user of usersArea) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
list([
    {id:1, name: 'Anna', age: 23},
    {id:2, name: 'Ivan', age: 73},
    {id:3, name: 'Vova', age: 93},
    {id:4, name: 'Ira', age: 83},
    {id:5, name: 'Anton', age: 99},
])
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let mivValue = (numbers) =>{
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(mivValue([88, 44, -56, 66, 78]));


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) =>{
    let basket = 0;
    for (const item of arr) {
        if (item > 0) {
            basket = basket + item;
        }

    }
    return basket;
}
console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, i1, i2) =>{
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;

    return arr;
}
console.log(swap([11, 22, 33, 44], 0,1));


// GDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
    let choseCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            choseCurrency =item;
        }
    }
    let result = sumUAH / choseCurrency.value;
    return result;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));