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
