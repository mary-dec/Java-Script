// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//

const url = new URLSearchParams(window.location.search);
const userId = url.get('id');
let details = document.getElementById('details');
fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    .then(res => res.json())
    .then((users) => {
        for (let user of users) {
            let usersDetails = document.createElement('div')
            usersDetails.classList.add('users-details')
            for (let usersKey in user) {
                if (typeof user[usersKey] === 'object') {
                    let keyDetail = document.createElement('div')
                    let title = document.createElement('h4')
                    title.innerText = `${usersKey}:`
                    let divKey = document.createElement('div')
                    for (let usKey1 in user[usersKey]) {
                        if (typeof user[usersKey][usKey1] === 'object') {
                            let userKey1 = document.createElement('h4')
                            userKey1.innerText = `${usKey1}:`
                            divKey.appendChild(userKey1)
                            for (let usKey2 in user[usersKey][usKey1]) {
                                let userKey2 = document.createElement('h4')
                                userKey2.innerText = `${usKey2}: ${user[usersKey][usKey1][usKey2]}`
                                divKey.appendChild(userKey2)
                            }
                        } else {
                            let userKey = document.createElement('h4')
                            userKey.innerText = `${usKey1}: ${user[usersKey][usKey1]}`
                            divKey.appendChild(userKey)
                        }
                    }
                    keyDetail.append(title, divKey)
                    usersDetails.appendChild(keyDetail)
                } else {
                    let userinfoH = document.createElement('h4')
                    userinfoH.innerText = `${usersKey}: ${user[usersKey]}`
                    usersDetails.appendChild(userinfoH)
                }
            }
            let button = document.createElement('button')
            button.innerText = 'Post of current user'
            button.onclick = function () {
                function getInfo(id) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                        .then(responce => responce.json())
                        .then(posts => {
                            const infoPosts = document.getElementById('posts');
                            posts.forEach(post => {
                                let postList = document.createElement('div');
                                postList.classList.add('post-list')
                                const detailInfo = document.createElement('div');
                                detailInfo.classList.add('detail-info')
                                detailInfo.innerText =
                                    `Title: ${post.title}`
                                let buttonPosts = document.createElement('button')
                                buttonPosts.innerText = 'Post details'
                                buttonPosts.onclick = function () {
                                    location.href = `post-details.html?id=${id}&postId=${post.id}`
                                }
                                postList.append(detailInfo, buttonPosts);
                                infoPosts.appendChild(postList)
                            });

                        })
                }

                return getInfo(user['id'])
            }
            usersDetails.appendChild(button)
            details.appendChild(usersDetails)

        }

    })