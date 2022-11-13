
function getRatingHTML(rating) {
    roundedRating = Math.round(rating * 2);
    stars = '';
    for (var starCount = 0; starCount < 5; starCount++){
        
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
class ItemListElement {
    constructor(image, title, rating) {
        this.title = title;
        this.image = image;
        this.rating = rating;
    }
    getHTML() {
        return `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-sm-6 py-4">
                    <div class="explore-item p-4">
                        <img src="${this.image}" alt="">
                        <h1>${this.title}</h1>
                        <div class="stars">
                            ${getRatingHTML(this.rating)}
                        </div>
                        <button>Add to cart</button>
                    </div>
                </div>`
    }
}
class BookListElement extends ItemListElement {
    constructor(image, title, rating, author) {
        super(image, title, rating);
        this.author = author;
    }
    getHTML() {
        return `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-sm-6 py-4">
                    <div class="explore-item p-4">
                        <img src="${this.image}" alt="">
                        <h1>${this.title}</h1>
                        <h3>${this.author}</h3>
                        <div class="stars">
                            ${getRatingHTML(this.rating)}
                        </div>
                        <button>Add to cart</button>
                    </div>
                </div>`
    }
}

itemList = [
    new BookListElement("../image/book-1.png", "Book Title", 5, "Book Author"),
    new BookListElement("../image/book-2.png", "Book Title", 4.5, "Book Author"),
    new BookListElement("../image/book-3.png", "Book Title", 4, "Book Author"),
    new BookListElement("../image/book-4.png", "Book Title", 3.5, "Book Author"),
    new BookListElement("../image/book-5.png", "Book Title", 3, "Book Author"),
    new BookListElement("../image/book-6.png", "Book Title", 2, "Book Author"),
    new BookListElement("../image/book-7.png", "Book Title", 1, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0.5, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),
    new BookListElement("../image/book-8.png", "Book Title", 0, "Book Author"),

];


function updateItemListingByRating(rating) {
    $("#itemTemplate").empty();
    revisedItemList = itemList.filter(val => val.rating >= rating);
    for (var i = 0; i < revisedItemList.length; i++) {
        $("#itemTemplate").append(revisedItemList[i].getHTML());
    }
}

$(document).ready(function () {
    for (var i = 0; i < itemList.length; i++) {
        $("#itemTemplate").append(itemList[i].getHTML());
    }
    sellerRating = document.getElementById("sellerRating0");
    sellerRating.addEventListener("click", function () {
        updateItemListingByRating(0);
    });
    sellerRating = document.getElementById("sellerRating1");
    sellerRating.addEventListener("click", function () {
        updateItemListingByRating(1);
    });
    sellerRating = document.getElementById("sellerRating2");
    sellerRating.addEventListener("click", function () {
        updateItemListingByRating(2);
    });
    sellerRating = document.getElementById("sellerRating3");
    sellerRating.addEventListener("click", function () {
        updateItemListingByRating(3);
    });
    sellerRating = document.getElementById("sellerRating4");
    sellerRating.addEventListener("click", function () {
        updateItemListingByRating(4);
    });
    sellerRating = document.getElementById("sellerRating5");
    sellerRating.addEventListener("click", function () {
        updateItemListingByRating(5);
    });
});