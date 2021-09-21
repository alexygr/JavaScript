const IMG = [
    {
        id: 0,
        big: "img/big/b0.jpg",
        small: "img/small/s0.jpg"
    },
    {
        id: 1,
        big: "img/big/b1.jpg",
        small: "img/small/s1.jpg"
    },
    {
        id: 2,
        big: "img/big/b2.jpg",
        small: "img/small/s2.jpg"
    },
    {
        id: 3,
        big: "img/big/b3.jpg",
        small: "img/small/s3.jpg"
    },
    {
        id: 4,
        big: "img/big/b5.jpg",
        small: "img/small/s4.jpg"
    }
]

function render() {
    const container = document.querySelector('.container')
    const big = document.createElement('div');
    big.classList.add('big');
    let img = document.createElement('img');
    img.classList.add('img');
    img.id = 'big-img'
    img.onerror = logError;
    img.src = IMG[0].big;
    big.append(img);
    const small = document.createElement('div');
    small.classList.add('small');

    for (el of IMG) {
        const smallCell = document.createElement('div');
        smallCell.classList.add('small-cell');
        smallCell.onclick = setImg;
        small.append(smallCell);
        img = img.cloneNode()
        img.src = el.small;
        img.id = el.id;
        smallCell.append(img);
    }
    container.append(big);
    container.append(small);
}


function setImg() {
    const index = this.firstElementChild.id;
    bigPic.src = IMG[index].big
}

function logError() {
    alert("Image " + this.src + " not exist")
}

render();

const bigPic = document.getElementById('big-img');
