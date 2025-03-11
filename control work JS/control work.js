// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

let infoDiv = document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
        for (let user  of users) {
            let usersDiv = document.createElement('div')
            usersDiv.classList.add('users-div')
            let usertitle = document.createElement('h2')
            usertitle.innerText = `
            Id: ${user.id}
            Name: ${user.name}
            `
            let button = document.createElement('button')
            button.innerText = 'More information'
            button.onclick = function () {
                location.href = `control2.html?id=${user.id}`
            }
            infoDiv.appendChild(usersDiv)
            usersDiv.append(usertitle, button)
        }});
