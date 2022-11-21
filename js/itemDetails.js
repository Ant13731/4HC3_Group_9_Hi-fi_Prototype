
var item;
var cartList = [];
var wishList = [];
class PriceCondElement {
    constructor(price, condition) {
        this.price = price;
        this.condition = condition;
    }
}
class BookListElement {
    constructor(private_id, image, title, rating, author, isbn, edition, price_cond, courseList) {
        this.author = author;
        this.title = title;
        this.image = image;
        this.rating = rating;
        this.isbn = isbn;
        this.edition = edition;
        this.price_cond = price_cond;
        this.courseList = courseList;
        this.id = private_id;
    }
}
fakeBook = new BookListElement(-1, "../image/mathsBookResize.jpg", "Introduction to Probability", 5, "Dr. B Chopra", "01234567890", 2, [new PriceCondElement(100.00, "Excellent")], ["STATS 2D03"] )


window.onload = ( () => {
    item =  JSON.parse( localStorage.getItem("itemDetails")) ?? fakeBook;
    cartList = JSON.parse(localStorage.getItem('cartList')) ?? [];
    wishList = JSON.parse(localStorage.getItem('wishList')) ?? [];
});

$(document).ready(function() {
    $("#item-container").append(getHTML());
    $(`#cartID`).click(function (e) {
        if (!cartList.includes(item)) {
            cartList.push(item);
            localStorage.setItem('cartList', JSON.stringify(cartList));
            console.log(cartList)
        }
    });
    $(`#wishlistID`).click(function (e) {
        if (!wishList.includes(item)) {
            wishList.push(item);
            localStorage.setItem('wishList', JSON.stringify(wishList));
            console.log(wishList)
        }
    });
    $(`#checkoutID`).click(function (e) {
        if (!cartList.includes(item)) {
            cartList.push(item);
            localStorage.setItem('cartList', JSON.stringify(cartList));
            console.log(cartList)
        }
        window.location.href = 'checkout.html';
    });
});
function getHTML(){
    if (item == undefined || item.courseList == undefined)
    {
        item = fakeBook;
    }
    var courseListHTML = "";
    for (var i = 0; i < item.courseList.length; i++) {
        courseListHTML += `<li>${item.courseList[i]}</li>\n`;
    }
    return `<div class="item-content row-cols-* mt-5  container-fluid" >
                <div class="col-lg-5 col-md-12 col-12">

                    <img src="${item.image}" class="img-fluid pb-1" alt="">
                    <div class="small-img-group">
                        <div class="small-img-col">
                            <img src="${item.image}" class="small-img" width ="100%" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="../image/book-img-1.jpg" class="small-img" width ="100%" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="../image/book-img-2.jpeg" class="small-img" width ="100%" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="../image/book-img-3.jpg" class="small-img" width ="100%" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-12">
                    <h1 >${item.title} </h1>
                    <h3>by ${item.author}</h3>
                    <h3 >ISBN: ${item.isbn}, Volume ${item.edition}</h3>
                    
                    <h2 class="py-4">$ ${item.price_cond[0].price.toFixed(2)}</h2>
                    <div style="display:flex">
                                <h4>Used in:</h4>
                                <ul>
                                    ${courseListHTML}
                                </ul>
                            </div>
                    <div class="stars">
                        ${getRatingHTML(item.rating)}
                    </div>
                    <div class="button-wrapper">
                        <button id="cartID" class="add-to-cart">Add to cart</button>
                    </div>
                    <div class="button-wrapper"> 
                        <button id="wishlistID" class="add-to-cart">Add to wishlist</button>
                    </div>    
                    <h3 class="mt-5 mb-5">Description:</h3>
                    <span><p class="desc-content" >Volume ${item.edition} covers a wide variety of key concepts under the topic of ${item.title.substr(0, item.title.indexOf(" "))}. The author, ${item.author}, has contributed much to the field and has shared their experiences throughout this book.</p>
                    </span>
                </div>
                <div class="seller-box containter-fluid col-lg-5 col-md-12 col-12">
                    <div class="card mt-5 p-5">
                        <h2>Seller Info</h2>
                        <h3> Name: Simeon Elly</h3>
                        <h3> Phone: (647) 447-5257</h3>
                        <h3> Email: ellys5@mcmaster.ca</h3>
                    </div>
                    
                    <div class="button-wrapper mt-5" >
                        <button id="checkoutID" class="add-to-cart">Checkout</button>
                    </div>
                </div>
            </div>`
}

function getRatingHTML(rating) {
    roundedRating = Math.round(rating * 2);
    stars = '';
    for (var starCount = 0; starCount < 5; starCount++) {

        if (roundedRating > 1) {
            stars = stars + '<i class="fas fa-star"></i>\n';
            roundedRating -= 2;
        }
        else if (roundedRating === 1) {
            stars = stars + '<i class="fas fa-star-half-alt"></i>\n';
            roundedRating -= 1;
        }
        else {
            stars = stars + '<i class="far fa-star"></i>\n';
        }
    }

    return stars;
}