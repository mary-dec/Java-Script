// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);
console.log(number[5]);
console.log(number[6]);
console.log(number[7]);
console.log(number[8]);
console.log(number[9]);


// ----------------------2.3---------------------

let book1 = {title: 'My house', pageCount: 100, genre: 'History',
    autors: [{name:'Anton', age: 45}, {name: 'Pavlov', age: 30}]};
console.log(book1);
let book2 = {title: 'About children', pageCount: 400, genre: 'Comedy',
    autors: [{name: 'Yuriy', age:40},{name:'Marina', age:54}]};
console.log(book2);
let book3 = {title: 'Seasons', pageCount: 500, genre: 'Poems',
    autors: [{name:'Igor',age:35},{name: 'Iryna',age: 45}]};
console.log(book3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    user = {name: 'Ivan', username: 'Ivan1', password: '4578fggut'},
    user = {name: 'Ira', username: 'Ira2', password: 'etyuujnnb'},
    user = {name: 'Nika', username: 'Nika3', password: 'yfddxxdddd'},
    user = {name: 'Roman', username: 'Roman3', password: 'fgghjjjj'},
    user = {name: 'Andriy', username: 'Andriy4', password: 'fsdghjjj'},
    user = {name: 'Nik', username: 'Nik5', password: 'tttttttttt'},
    user = {name: 'Piter', username: 'Piter3', password: '5555bbbbbb'},
    user = {name: 'Igor', username: 'Igor6', password: 'ertt55666'},
    user = {name: 'Anton', username: 'Anton', password: 'gggggggggfd'},
    user = {name: 'Pavlo', username: 'Pavlo', password: 'gggyyyoooo'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperature = [
    Mondey = {morning : 10, afternoon : 11, evening : 12},
    Tuesday = {morning : 10, afternoon : 11, evening : 12},
    Wednesday = {morning : 10, afternoon : 11, evening : 12},
    Thursday = {morning : 8, afternoon : 10, evening : 2},
    Friday = {morning : 6, afternoon : 10, evening : 4},
    Saturdey = {morning : 7, afternoon : 23, evening : 5},
    Sunday = {morning : 4, afternoon : 16, evening : 6},
]
console.log(Mondey);
console.log(Thursday);
console.log(Wednesday);
console.log(Thursday);
console.log(Friday);
console.log(Saturdey);
console.log(Sunday);


// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let y = +prompt ('enter number 1 0 -3');
if (y !== 0){
    console.log('true');
}else {
    console.log('false');
}

// |||||||||||||||||||||||||||2/7|||||||||||||||||||||||||||
// 3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 0;
if (time >= 0 && time < 15) {
    console.log('1')
}else if (time >=15 && time < 30) {
    console.log('2')
}else if (time >=30 && time < 45) {
    console.log('3')
}else if (time >= 45 &&  time <= 59){
    console.log('4')
}
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15;
if (day >= 1 && day <= 10) {
    console.log('1')
}else if (day > 10 && day <= 20) {
    console.log(2)
}else if (day > 20 && day <= 31) {
    console.log('3')
}
// _________________#KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).---------

switch ('6'){
    case '1':
        console.log('Study JS');
        break;
    case '2':
        console.log('Study English');
        break;
    case '3':
        console.log('Read lecture');
        break;
    case '4':
        console.log('Play with my children');
        break;
    case '5':
        console.log('Study HTML');
        break;
    case '6':
        console.log('Clean my room');
        break;
    case '7':
        console.log('Cook dinner');
        break;
}
// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = 50;
let b = 80;
if (a > b) {
    console.log(a);
}else if (b > a) {
    console.log(b);
}else if (a === b) {
    console.log(a = b);
}


//     #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = null;
if (x === ' ') {
    console.log('default');
}else if (x === 0) {
    console.log('default');
}else  if (x === null) {
    console.log('default');
}else  if (x === NaN) {
    console.log('default');
}else if (x === undefined) {
    console.log('default');
}else if (x === false) {
    console.log('default')
}else {
    console.log(x);
}

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray [0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray [1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray [2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray [3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray [4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray [5].monthDuration > 5) {
    console.log('Super');
}
