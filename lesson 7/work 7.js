// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const user = new User(1, 'Nazar', 'Ivanov', 'nazar@', '0987655' );
console.log(user);

let users = [
    new User(1, 'Nazar', 'Ivanov', 'nazar@', '0987655'),
    new User(3, 'Kolya', 'Tron', 'kolya@', '0987666666'),
    new User(4, 'Vasya', 'Trush', 'kolya@', '0987666666'),
    new User(5, 'Anton', 'Tronyan', 'kalya@', '09876699999'),
    new User(6, 'Stepan', 'Hmily', 'pakolya@', '098888688888'),
    new User(7, 'Vitya', 'Tom', 'lolya@', '09878543'),
    new User(8, 'Olya', 'Tinan', 'makaa@', '09862897777'),
    new User(9, 'Petya', 'Poron', 'olya@', '098723333'),
    new User(10, 'Roma', 'Terlecykuy', 'lilya@', '098766888888'),

]
console.log(users)

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let users2 = [
    new User(1, 'Nazar', 'Ivanov', 'nazar@', '0987655'),
    new User(3, 'Kolya', 'Tron', 'kolya@', '0987666666'),
    new User(4, 'Vasya', 'Trush', 'kolya@', '0987666666'),
    new User(5, 'Anton', 'Tronyan', 'kalya@', '09876699999'),
    new User(6, 'Stepan', 'Hmily', 'pakolya@', '098888688888'),
    new User(7, 'Vitya', 'Tom', 'lolya@', '09878543'),
    new User(8, 'Olya', 'Tinan', 'makaa@', '09862897777'),
    new User(9, 'Petya', 'Poron', 'olya@', '098723333'),
    new User(10, 'Roma', 'Terlecykuy', 'lilya@', '098766888888'),

];
const filterFunction = users2.filter((user) => user.id % 2 === 0);
console.log(filterFunction);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let users3 = [
    new User(4, 'Nazar', 'Ivanov', 'nazar@', '0987655'),
    new User(3, 'Kolya', 'Tron', 'kolya@', '0987666666'),
    new User(1, 'Vasya', 'Trush', 'kolya@', '0987666666'),
    new User(5, 'Anton', 'Tronyan', 'kalya@', '09876699999'),
    new User(6, 'Stepan', 'Hmily', 'pakolya@', '098888688888'),
    new User(7, 'Vitya', 'Tom', 'lolya@', '09878543'),
    new User(10, 'Olya', 'Tinan', 'makaa@', '09862897777'),
    new User(9, 'Petya', 'Poron', 'olya@', '098723333'),
    new User(8, 'Roma', 'Terlecykuy', 'lilya@', '098766888888'),

];
function sorter(user1, user2) {
    return user1.id - user2.id;
}
console.log(users3.sort(sorter));
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1, 'Ira', 'Ivanova', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}]),
    new Client(2, 'Vova', 'Max', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}]),
    new Client(3, 'Ira', 'Irun', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}]),
    new Client(4, 'Anton', 'Inova', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}]),
    new Client(5, 'Ira', 'Vanova', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}]),
];

console.log(clients);
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
function Client2(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients2 = [
    new Client(1, 'Ira', 'Ivanova', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}]),
    new Client(2, 'Vova', 'Max', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}, {title: 'phone', price: 6000}, {title: 'phone', price: 6000}]),
    new Client(3, 'Ira', 'Irun', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}, {title: 'phone', price: 6000}, {title: 'phone', price: 6000}, {title: 'phone', price: 6000}]),
    new Client(4, 'Anton', 'Inova', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}]),
    new Client(5, 'Ira', 'Vanova', 'ira@ukr.net', '09877766554', [{title:'tv',price:10000}, {title: 'phone', price: 6000}, {title: 'phone', price: 6000}]),
];
const sort = clients2.sort((a,b) => a.order.length - b.order.length);
console.log(sort);

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(mode, producer, year, maxSpead, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpead = maxSpead;
        this.engineVolume = engineVolume;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpead} на годину`)
        };
        this.info = function () {
            for (const key in this) {
                console.log(key, this[key]);
            }
        };
        this.increaseMaxSpeed = function (newSpeed) {
            if (newSpeed > 0) this.maxSpead = this.maxSpead + newSpeed;
        };
        this.changeYear = function (year) {
            if (year > 1815) this.year = year;
        };
        this.addDrive  = function (driver) {
            if (driver) this.driver = driver;
        };
}
const car = new Car ('bmw', 'q3', 34, 90, 5);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(90);
car.changeYear(2015);
car.addDrive({});



// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car22{

    constructor(mode, producer, year, maxSpead, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpead = maxSpead;
        this.engineVolume = engineVolume;
    };
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpead} на годину`)
    };
    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed() {
        if (newSpeed > 0) this.maxSpead = this.maxSpead + newSpeed;
    };
    changeYear() {
        if (year > 1815) this.year = year;
    };
    addDrive() {
        if (driver) this.driver = driver;
    };
}
const car2 = new Car22 ('lexus', 'q3', 34, 90, 5);
console.log(car2);
car.drive();
car.info();
car.increaseMaxSpeed(90);
car.changeYear(2015);
car.addDrive({});

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
class Prince {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
const cinderlles = [
    new Cinderella('ira1', 23, 36),
    new Cinderella('ira1', 23, 36),
    new Cinderella('ira1', 23, 36),
    new Cinderella('ira1', 23, 36),
    new Cinderella('ira1', 23, 36),
]
const prince = new Prince('ivan', 34, 36);
const cinderellaMain = cinderlles.find(cinderella => cinderella.footsize === prince.slipper);
prince.wife = cinderellaMain;

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
};

[11, 22, 33].myForEach((x) => console.log(x));
Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)){
            arr.push(item);
        }
        return arr;
    }
}
let users4 = [
    {name:'Vala', age: 31, status: true},
    {name:'Ira', age: 32, status: false},
    {name:'Olya', age: 33, status: true},
];
const result = users4.myFilter((user) => user.status);
console.log(result);