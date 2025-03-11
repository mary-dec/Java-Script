// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)


// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const urlSearch = new URLSearchParams(window.location.search);
const usId = urlSearch.get('id');
const postId = urlSearch.get('postId');
const postDetails = document.getElementById('post-details');
fetch(`https://jsonplaceholder.typicode.com/users/${usId}/posts?id=${postId}`)
    .then(responce => responce.json())
    .then(posts => {
        for (let post of posts) {
           let allDetails = document.createElement('div')
            allDetails.classList.add('all-details')
            function listDetails(post) {
               for (let postKey in post) {
                   let postinfo = document.createElement('h4')
                   postinfo.innerText = `
                   ${postKey}: ${post[postKey]}
                   `
                   allDetails.appendChild(postinfo)
               }
            }
            listDetails(post)
            postDetails.appendChild(allDetails)
        }
    })
let aboutUser = document.getElementById('all-comments')
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (let comment of comments) {
            let infoUse = document.createElement('div')
            infoUse.classList.add('info-use')
            function useComment(comment) {
                for (let commentKey in comment) {
                    let infoComment = document.createElement('div')
                    infoComment.innerText = `${commentKey}: ${comment[commentKey]}`
                    infoUse.appendChild(infoComment)
                }
            }
            useComment(comment)
            aboutUser.appendChild(infoUse)
        }
    })