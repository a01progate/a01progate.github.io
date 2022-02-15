class Person{
    constructor(name, comment){
        this.name = name;
        this.comment = comment;
    }
}
const user1 = new Person('user1', 'Ini adalah komentar saya.')
const user2 = new Person('user2','Ini adalah sebuah komentar.');
const user3 = new Person('user3','Ini adalah sebuah komentar.');
const user4 = new Person('user4','Ini adalah sebuah komentar.');
const user5 = new Person('user5','Ini adalah sebuah komentar.');

const arrPerson = [user1, user2, user3, user4, user5];
const username = document.querySelectorAll('#username');
const comment = document.querySelectorAll('#comment');

for(let i = 0; i < arrPerson.length; i++){
    username[i].textContent = arrPerson[i].name;
    comment[i].textContent = arrPerson[i].comment;
}

const imgArr = ['covid1.jpg','covid2.jpg','covid3.jpg'];
let pos = -1;
function slideShow(){
    const cover = document.querySelector('.message-wrapper');
    pos++;
    pos = (pos == imgArr.length) ? 0 : pos;
    cover.style.backgroundImage = `url(../images/${imgArr[pos]})`;
    setTimeout(slideShow, 5000);
}
document.body.addEventListener('load',slideShow());
