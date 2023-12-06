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

/*let thisPage = 1;
let limit = 6;
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




const btn=document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,INDEX){
    button.addEventListener("click",function(event){
        var btnItem= event.target
        var product= btnItem.parentElement
        var productImg= product.querySelector("img").src
        var productName= product.querySelector("P").innerText
        var productPrice= product.querySelector("span").innerText
       // console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)
    })
})

function addcart(productPrice,productImg,productName){
    var addtr= document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0 ; i < cartItem.length ; i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML==productName){
            alert("You have this product in cart")
            return
        }
    }
    var trcontent= '<tr>  <td style="display: flex;align-items: center;"> <img style=" width: 150px;" src="'+productImg+'"> <span class="title">'+productName+'</span> </td> <td><p style="font-size: 15px;"><span class="price">'+productPrice+'</span></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="delete">Xóa</span> </td></tr>'
    addtr.innerHTML= trcontent
    var cartTable=document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)



    cartTotal()
    deleteCart()
}
//---------------------total price----------------------//
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    //console.log(cartItem.length)
    for(var i = 0 ; i < cartItem.length ; i++){
        //console.log(i)
        var inputValue = cartItem[i].querySelector("input ").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
       // console.log(productPrice)
        totalA= inputValue*productPrice*1
       // totalB= totalA.toLocaleString('de-DE')
      //  console.log(totalB)
        totalC= totalC + totalA
       //totalD =totalC.toLocaleString('de-DE')
       // console.log(totalC)


    }
            var cartTotalA =document.querySelector(".price-total span")
            var cartPrice =document.querySelector(".item-box span")
            cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
            cartPrice.innerHTML = totalC.toLocaleString('de-DE')
            inputchange()
            console.log(cartTotalA)
}
//---------------------Delete cart----------------------//
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0 ; i < cartItem.length ; i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            cartTotal()
            //console.log(cartItemR)
        })

        //console.log(cartItemR)
        }
    }

function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0 ; i < cartItem.length ; i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })

        //console.log(cartItemR)
        }
}
*/
/*const cartbtn = document.querySelector(".bx-x")
const cartshow = document.querySelector(".bxs-shopping-bags")
cartshow.addEventListener("click",function(){
    console.log(cartshow)
   document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartshow)
   document.querySelector(".cart").style.right = "-100%"
})
*/
const products = [
    { name: 'Unove Deep damage Repair shampoo', category: 'shampoo', price: 10.99 },
    { name: 'Unove silk oil essence', category: 'essence', price: 10.99 },
    // Thêm sản phẩm khác nếu cần
  ];

  const resultsPerPage = 2; // Số sản phẩm hiển thị trên mỗi trang
  let currentPage = 1;
function searchProducts(){
    // Lấy giá trị từ các trường tìm kiếm
    const productName = document.getElementById('productName').value.toLowerCase();
    const category = document.getElementById('category').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;

    // Lọc danh sách sản phẩm theo các tiêu chí tìm kiếm
    const filteredProducts = products.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(productName);
      const categoryMatch = category === '' || product.category === category;
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;

      return nameMatch && categoryMatch && priceMatch;
    });

    // Hiển thị kết quả
    displayResults(filteredProducts);
}
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    const paginationContainer = document.getElementById('pagination');

    // Tính toán các giá trị phân trang
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const paginatedResults = results.slice(startIndex, endIndex);

    // Hiển thị kết quả
    resultsContainer.innerHTML = '';
    paginatedResults.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'item';
      productElement.innerHTML = `
        <a href="#" style="text-decoration: none; color: black;">
          <img src="IMAGES/${product.category}.jpg" alt="${product.name}">
          <div class="heart"></div>
          <p style="margin-top: 10px;">${product.name}</p>
          <p style="font-size: 15px;"><del>22.00 $</del></p>
          <p><span>${product.price.toFixed(2)} </span>$</p>
          <div>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half'></i>
            <p style="font-size: medium; color: darkgray;">(469)</p>
          </div>
        </a><button>Add to cart</button>
      `;
      resultsContainer.appendChild(productElement);
    });

    // Hiển thị phân trang
    const totalPages = Math.ceil(results.length / resultsPerPage);
    paginationContainer.innerHTML = `Trang ${currentPage} / ${totalPages}`;

    // Tùy chọn: Thêm các điều khiển phân trang (nút Next, Prev)
  }

  // Tìm kiếm ban đầu khi trang được tải
  searchProducts();
  