
var item;
var cartList = [];
var wishList = [];
window.onload = ( () => {
    item =  JSON.parse( localStorage.getItem("itemDetails"));
    cartList = JSON.parse(localStorage.getItem('cartList')) ?? [];
    wishList = JSON.parse(localStorage.getItem('wishList')) ?? [];
});

$(document).ready(function() {
    $("#item-container").append(getHTML(item));
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
});
function getHTML(item){
    return `<div class="item-content row mt-5 container" >
                <div class="col-lg-5 col-md-12 col-12">

                    <img src="${item.image}" class="img-fluid pb-1" alt="">
                    <div class="small-img-group">
                        <div class="small-img-col">
                            <img src="${item.image}" class="small-img" width ="100%" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="${item.image}" class="small-img" width ="100%" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="${item.image}" class="small-img" width ="100%" alt="">
                        </div>
                        <div class="small-img-col">
                            <img src="${item.image}" class="small-img" width ="100%" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-12">
                    
                    <h1 >${item.title} </h1>
                    <h3>by ${item.author}</h3>
                    <h3 >ISBN: ${item.isbn}, Volume ${item.edition}</h3>
                    <h2 class="py-4"> $40.00</h2>
                    <button id="cartID" class="add-to-cart">Add to cart</button>
                    <button id="wishlistID" class="add-to-cart">Add to wishlist</button>
                    <h4 class="mt-5 mb-5">Description:</h4>
                    <span>Lorem ipsum</span>
                    
                </div>
            </div`
}