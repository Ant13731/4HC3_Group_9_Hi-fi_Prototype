var cartList = [];
var wishList = [];

//copy of explore.js getRatingHTML
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

function getHTMLCart(item) {
    var courseListHTML = "";
    for (var i = 0; i < item.courseList.length; i++) {
        courseListHTML += `<li>${item.courseList[i]}</li>\n`;
    }
    return `<div class="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-xs-sm-12 py-4 cart-wish-list-field mx-auto" id="book-list-element-cart-${item.id}">
                <div class="cart-wish-list-item">
                    <img src="${item.image}" alt="">
                    <div class="item-text-details">
                        <h1>${item.title}</h1>
                        <h3>by ${item.author}</h3>
                        <h3>ISBN: ${item.isbn}, Volume ${item.edition}</h3>
                        <h3>From $${item.price_cond[0].price.toFixed(2)}, ${item.price_cond[0].condition} Condition</h3>
                        <h5>Description:</h5>
                        <p>Volume ${item.edition} covers a wide variety of key concepts under the topic of ${item.title.substr(0, item.title.indexOf(" "))}. The author, ${item.author}, has contributed much to the field and has shared their experiences throughout item book.</p>
                        <div style="display:flex">
                            <h4>Used in:</h4>
                            <ul>
                                ${courseListHTML}
                            </ul>
                        </div>
                        <div class="stars cart-stars">
                            ${getRatingHTML(item.rating)}
                        </div>
                        <div class="explore-item-button-wrapper">
                            <button class="explore-item-button remove-from-cart">Remove from cart</button>
                        </div>
                    </div>
                </div>
            </div>`
}
function getHTMLWish(item) {
    var courseListHTML = "";
    for (var i = 0; i < item.courseList.length; i++) {
        courseListHTML += `<li>${item.courseList[i]}</li>\n`;
    }
    return `<div class="col-xl-6 col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-sm-12 py-4 cart-wish-list-field mx-auto" id="book-list-element-wish-${item.id}">
                <div class="cart-wish-list-item">
                    <img src="${item.image}" alt="">
                    <div class="item-text-details">
                        <h1>${item.title}</h1>
                        <h3>by ${item.author}</h3>
                        <h3>ISBN: ${item.isbn}, Volume ${item.edition}</h3>
                        <h3>From $${item.price_cond[0].price.toFixed(2)}, ${item.price_cond[0].condition} Condition</h3>
                        <h5>Description:</h5>
                        <p>Volume ${item.edition} covers a wide variety of key concepts under the topic of ${item.title.substr(0, item.title.indexOf(" "))}. The author, ${item.author}, has contributed much to the field and has shared their experiences throughout item book.</p>
                        <div style="display:flex">
                            <h4>Used in:</h4>
                            <ul>
                                ${courseListHTML}
                            </ul>
                        </div>
                        <div class="stars cart-stars">
                            ${getRatingHTML(item.rating)}
                        </div>
                        <div class="explore-item-button-wrapper">
                            <button class="explore-item-button move-to-cart">Move to cart</button>
                        </div>
                        <div class="explore-item-button-wrapper">
                            <button class="explore-item-button remove-from-wish-list">Remove from wishlist</button>
                        </div>
                    </div>
                </div>
            </div>`
}

function getHTMLEmptyList() {
    return `<div class="col-12 py-4">
                <div class="cart-wish-list-empty-wrapper">
                <div class="cart-wish-list-empty">
                <p>Uh oh, looks like this list is empty. Feel free to <a href="explore.html">explore our selection</a> of books and find something that suits your taste. In the meantime, we'll wait right here.</p>
            </div>
            </div>
            </div>`;
}

window.addEventListener('load', function (e) {
    cartList = JSON.parse(localStorage.getItem('cartList')) ?? [];
    wishList = JSON.parse(localStorage.getItem('wishList')) ?? [];
});

//resets and reloads the cart and wishlist pages. also updates the local storage
function loadCartAndWishList() {
    $("#itemTemplateCart").empty();
    $("#itemTemplateWishList").empty();

    for (var i = 0; i < cartList.length; i++) {
        const index = i;
        $("#itemTemplateCart").append(getHTMLCart(cartList[i]));
        $(`#book-list-element-cart-${cartList[i].id}`).children().eq(0).children().eq(1).children().eq(8).children().eq(0).click(function(e) {
            cartList = cartList.filter(function(elem) { return elem.id !== cartList[index].id;});
            localStorage.setItem('cartList', JSON.stringify(cartList));
            loadCartAndWishList();
            loadProceedToCheckout();
        });
    }
    for (var i = 0; i < wishList.length; i++) {
        const index = i;
        $("#itemTemplateWishList").append(getHTMLWish(wishList[i]));
        $(`#book-list-element-wish-${wishList[i].id}`).children().eq(0).children().eq(1).children().eq(8).children().eq(0).click(function(e) {
            if (!cartList.some(function(elem) {return JSON.stringify(elem) === JSON.stringify(cartList[index]);}))
            {
                cartList.push(wishList[index]);
            }
            wishList = wishList.filter(function(elem) { return elem.id !== wishList[index].id;});
            localStorage.setItem('cartList', JSON.stringify(cartList));
            localStorage.setItem('wishList', JSON.stringify(wishList));
            loadCartAndWishList();
            loadProceedToCheckout();
        });
        $(`#book-list-element-wish-${wishList[i].id}`).children().eq(0).children().eq(1).children().eq(9).children().eq(0).click(function(e) {
            wishList = wishList.filter(function(elem) { return elem.id !== wishList[index].id;});
            localStorage.setItem('wishList', JSON.stringify(wishList));
            loadCartAndWishList();
            loadProceedToCheckout();
        });
    }
    if (cartList.length === 0) {
        $("#itemTemplateCart").append(getHTMLEmptyList());

    }
    if (wishList.length === 0) {
        $("#itemTemplateWishList").append(getHTMLEmptyList());

    }
}

//load the checkout button
function loadProceedToCheckout() {
    $("#proceed-to-checkout").empty();
    $("#proceed-to-checkout").append(`<h1 style="text-align: center;">Item Prices</h1>`);
    $("#proceed-to-checkout").append(`<br>`);
    prices = []
    totalPrice = 0.00;
    for (var i = 0; i < cartList.length; i++) {
        prices.push(cartList[i].price_cond[0].price);
        totalPrice += cartList[i].price_cond[0].price;
        $("#proceed-to-checkout").append(`<h3>$${cartList[i].price_cond[0].price.toFixed(2)}</h3>`);
    }
    $("#proceed-to-checkout").append(`<h3 style="float:left;">+</h3>`);
    $("#proceed-to-checkout").append(`<h3>----------</h3>`);
    $("#proceed-to-checkout").append(`<h3 style="float:left;">Total</h3>`);
    $("#proceed-to-checkout").append(`<h3>$${totalPrice.toFixed(2)}</h3>`);
    $("#proceed-to-checkout").append(`<button class="proceed-to-checkout-button explore-item-button" id>
                                        <h2>Proceed to checkout</h2>
                                    </button> `);
    $("#proceed-to-checkout").children().eq(-1).click(function(e) {
        window.location.href = "checkout.html";
    });
}


$(document).ready(function () {
    cartList = JSON.parse(localStorage.getItem('cartList')) ?? [];
    wishList = JSON.parse(localStorage.getItem('wishList')) ?? [];
    loadCartAndWishList();
    loadProceedToCheckout();
});