// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const button = document.getElementById('into');
button.onclick = function () {
    document.getElementById('text').remove();
}

    //     #j693ca8
    // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageForm = document.forms.age;
let age18 = document.getElementById('age18')


ageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let ageFromInput = ageForm.age.value
    if (ageFromInput < 18){
        age18.innerText = 'Age < 18 years'
    } else {
        age18.innerText = 'Age > 18 years'
    }
})


// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const formInfo = document.forms.formInfo;
const formI = document.getElementById('formI');
formInfo.addEventListener('submit', (e) => {
    e.preventDefault();
    // 'const formInfo = document.forms.formInfo;'
    const nameValue = formInfo.name.value;
    const surnameValue = formInfo.surname.value;
    const ageValue = formInfo.age.value;
    let obj = {nameValue, surnameValue, ageValue}
        console.log(obj);
    formI.innerText = obj.nameValue + ' ' + obj.surnameValue + '' + obj.ageValue;
});

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let changeNamber = +localStorage.getItem('number');
changeNamber += 1;
localStorage.setItem('number', changeNamber);
document.getElementById('change').innerText = changeNamber;



// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
let sessionsList;
if (localStorage.getItem('sessionsList')){
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
}else {
    sessionsList = [];
}
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
for (const sessionsListElement of sessionsList) {
    const div = document.createElement('form2');
    div.innerText = sessionsListElement.toString();
    document.getElementById('form2');
}

// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById('xx');
const resultDiv = document.getElementById('result');
input.oninput = function () {
        resultDiv.innerText = +this.value * 2.2;
}



// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('there is no such array');
    }

    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName,  JSON.stringify(array) );
}

addToLocalStorage('sessionsList', {});



//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table');
const tableFrom = document.forms['tableFrom'];
tableFrom.onsubmit = function (e) {
    e.preventDefault();
    const linesValue = +tableFrom.lines.value;
    const cellsValue = +tableFrom.cells.value;
    const dataValue = tableFrom.data.value;
    console.log(linesValue, cellsValue, dataValue);
};


//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається








// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів