// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let word1 = 'hello world';
console.log(word1.length);
let word2 = 'lorem ipsum';
console.log(word2.length);
let word3 = 'javascript is cool';
console.log(word3.length);

const list = [word1, word2, word3];
for (const word of list){
    console.log(word.length);
}




// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let w = 'hello world';
const w1 = w.toUpperCase();
console.log(w1);

let p = 'lorem ipsum';
const p1 = p.toUpperCase();
console.log(p1);

let d = 'javascript is cool';
const d1 = d.toUpperCase();
console.log(d1);


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let r = 'hello world';
const r1 = r.toLowerCase();
console.log(r1);

let c = 'lorem ipsum';
const c1 = c.toLowerCase();
console.log(c1);

let k = 'javascript is cool';
const k1 = k.toLowerCase();
console.log(k1);

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


let str = ' dirty string   '
const g = str.trim();
console.log(g);

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringArray(str) {
    if (str) {
        const split = str.split(" ");
        return split;
    }
    return ['']

}

console.log(stringArray('Ревуть воли як ясла повні'));


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const strings = numbers.map(numbers =>{
    return numbers + '';
});
console.log(strings);



// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
function sortNums(nums, direction){
    if (direction === 'ascending') return nums.sort((a, b) => a - b);
    if (direction === 'descending') return nums.sort((a, b) => b -a);
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));






// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const map1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(map1);
const map2 = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(map2);
const map3 = coursesAndDurationArray.map(function (value, index){
    return{
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log(map3);

//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
const cards = [];
for (const suit of suits){
    for (const value of values) {
        const card = {cardSuit: suit, values: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
// знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// // - всі шістки
console.log(cards.filter(card => card.value === '6'));
// // - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// // - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
// // - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));




//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce((accum,card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }
    return accum;
    }, {
        spades:[],
        diamonds:[],
         hearts:[],
        clubs:[]
});
console.log(reduce);




// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));