/*let listProducts = [
    {
        id: 1,
        name: 'Skin 1004 Hyalu- Cica Toner1',
        price: 22.00,
        quantyti: 0,
        image: 'IMAGES/face6.jpg',
        href: '../../FACE/Toner/product1.html',
    },
    {
        id: 2,
        name: 'Skin 1004 Serum Centella8',
        price: 22.00,
        quantyti: 1,
        image: 'IMAGES/face6.jpg',
        href: '../../FACE/Toner/product1.html',
    },
    {
        id: 3,
        name: 'Unove Deep Damage Treatment EX9',
        price: 22.00,
        quantyti: 2,
        image: 'IMAGES/face6.jpg',
        href: '../../FACE/Toner/product1.html',
    },
    {
        id: 4,
        name: 'Skin 1004 Hyalu-Cica Serum',
        price: 22.00,
        quantyti: 3,
        image: 'IMAGES/face6.jpg',
        href: '../../FACE/Toner/product1.html',
    },
    {
        id: 5,
        name: 'Skin 1004 Centella Toner11',
        price: 22.00,
        quantyti: 4,
        image: 'IMAGES/face6.jpg',
        href: '../../FACE/Toner/product1.html',
    },
    {
        id: 6,
        name: 'Paula Choice Weightless Body Treatment 2% BHA12',
        price: 22.00,
        quantyti: 5,
        image: 'IMAGES/face6.jpg',
        href: '../../FACE/Toner/product1.html',
    }

];
let List = document.querySelector('.list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');


let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter) {
    count.innerText = productFilter.length;
    List.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        console.log(newItem.innerHTML);
        newItem.classList.add('item');
        
        newItem.innerHTML = `
        <a href="${item.href}" style="text-decoration: none; color: black;">
        <img src="${item.image}" alt="Product 1">
        <div class="heart"></div>
        <p style="margin-top: 10px;">${item.name}</p>
        <p style="font-size: 15px;"><del>$22.00</del></p>
        <p><span style="color: brown;">50%</span>&emsp;${item.price}</p>
        <div>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half' ></i>
            <p style="font-size: medium; color: darkgray;">(449)</p>
        </div>
        </a>
        `
        List.appendChild(newItem);

        // let newImage = new Image();
        // newImage.src = item.image;
        // newItem.appendChild(newImage);

        // let newTitle = document.createElement('div');
        // newTitle.classList.add('title');
        // newTitle.innerText = item.name;
        // newItem.appendChild(newTitle);
        
    });

}

// filter.addEventListener('sumit', function (event) {
//     alert('1111');
// })
*/

let thisPage = 1;
let limit = 2;
let list = document.querySelectorAll('.list .item');

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        listPage();
    });
}
loadItem();
function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerHTML = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerHTML = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerHTML = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }

}

function changePage(i) {
    thisPage = i;
    loadItem();
}