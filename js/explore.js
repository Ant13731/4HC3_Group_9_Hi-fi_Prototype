var searchString = "";

// Turn a rating between 0 and 5 into a series of star icons (HTML string format)
// Needs font awesome enabled on the HTML page to run
// function itemDetailsRedirect(){
//     window.location.replace("");
// }
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

//used to store the price and associated condition of an item (used in BookListElement)
class PriceCondElement {
    constructor(price, condition) {
        this.price = price;
        this.condition = condition;
    }
}

// contains all information about a book/item
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
    //get an HTML string of a book's data (for use in the explore page item listing)
    //the "hide-item-details" part is the div that shows up on hover
    getHTML() {
        var courseListHTML = "";
        for (var i = 0; i < this.courseList.length; i++) {
            courseListHTML += `<li>${this.courseList[i]}</li>\n`;
        }
        return `<div  class="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-sm-6 py-4 explore-item-parent" id="book-list-element-${this.id}">
                    <div class="explore-item p-4 item-details">
                        <img src="${this.image}" alt="" class="explore-item-image">
                        <h1>${this.title}</h1>
                        <h3>${this.author}</h3>
                        <div class="stars">
                            ${getRatingHTML(this.rating)}
                        </div>
                        <button class="explore-item-button add-to-cart">Add to cart</button>
                    </div>
                    <div class="hide-item-details">
                        <img src="${this.image}" alt="">
                        <div class="item-text-details">
                            <h1>${this.title}</h1>
                            <h3>by ${this.author}</h3>
                            <h3>ISBN: ${this.isbn}, Volume ${this.edition}</h3>
                            <h3>From $${this.price_cond[0].price.toFixed(2)}, ${this.price_cond[0].condition} Condition</h3>
                            <h5>Description:</h5>
                            <p>Volume ${this.edition} covers a wide variety of key concepts under the topic of ${this.title.substr(0, this.title.indexOf(" "))}. The author, ${this.author}, has contributed much to the field and has shared their experiences throughout this book.</p>
                            <div style="display:flex">
                                <h4>Used in:</h4>
                                <ul>
                                    ${courseListHTML}
                                </ul>
                            </div>
                            <div class="stars">
                                ${getRatingHTML(this.rating)}
                            </div>
                            <div class="explore-item-button-wrapper">
                                <button class="explore-item-button add-to-cart">Add to cart</button>
                            </div>
                            <div class="explore-item-button-wrapper">
                                <button class="explore-item-button add-to-wishlist">Add to wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>`

    }
}
//////////////////////////////
/// Default Data creation
//---------------------------
/// Randomly selects a combination of below courses, course codes, covers, surnames, conditions, and prices to make a book listing.
//////////////////////////////
courses = ["ABLD", "ANTHROP", "ARABIC", "ART", "ARTHIST", "ARTSSCI", "ASTRON", "AUTOTECH", "BIOCHEM", "BIOLOGY", "BIOMEDDC", "BIOPHYS", "BIOSAFE", "BIOTECH", "CAYUGA", "CHEM", "CHEMBIO", "CHEMBME", "CHEMENG", "CHINESE", "CIVBME", "CIVENG", "CIVTECH", "CLASSICS", "CMST", "CMTYENGA", "COLLAB", "COMMERCE", "COMPENG", "COMPSCI", "DATASCI", "EARTHSC", "ECON", "ELECBME", "ELECENG", "ENGINEER", "ENGLISH", "ENGNMGT", "ENGPHYS", "ENGSOCTY", "ENGTECH", "ENRTECH", "ENVIRSC", "ENVSOCTY", "EPHYSBME", "EXPLORE", "FARSI", "FRENCH", "GENDRST", "GENTECH", "GERMAN", "GLOBALZN", "GREEK", "HEBREW", "HISTORY", "HLTHAGE", "HTHSCI", "HUMAN", "HUMBEHV", "IARTS", "IBEHS", "IBH", "INDIGST", "INNOVATE", "INSPIRE", "INTENG", "ISCI", "ITALIAN", "JAPANESE", "KINESIOL", "KOREAN", "LABRST", "LATAM", "LATIN", "LIFESCI", "LINGUIST", "MANTECH", "MATH", "MATLS", "MATLSBME", "MECHBME", "MECHENG", "MECHTRON", "MEDIAART", "MEDPHYS", "MEDRADSC", "MELD", "MIDWIF", "MOHAWK", "MOLBIOL", "MUSIC", "MUSICCOG", "NEUROSCI", "NURSING", "OJIBWE", "PEACJUST", "PHARMAC", "PHILOS", "PHYSICS", "PNB", "POLISH", "POLSCI", "PROCTECH", "PSYCH", "RUSSIAN", "SANSKRIT", "SCAR", "SCICOMM", "SCIENCE", "SEP", "SFGNTECH", "SFWRBME", "SFWRENG", "SFWRTECH", "SMRTTECH", "SOCIOL", "SOCPSY", "SOCSCI", "SOCWORK", "SPANISH", "STATS", "SUSTAIN", "THTRFLM", "TRONBME", "WHMIS", "WORKLABR"];
var codes = [];
letters = "qwertyuiopasdfghjklzxcvbnm".toUpperCase();
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 26; j++) {
        for (var k = 0; k < 10; k++) {
            codes.push(`${i}${letters[j]}${k}`);
        }
    }
}
bookCovers = ["../image/book-1.png", "../image/book-2.png", "../image/book-3.png", "../image/book-4.png", "../image/book-5.png", "../image/book-6.png", "../image/book-7.png", "../image/book-8.png", "../image/book-9.png", "../image/book-10.png", "../image/book3.png", "../image/book5.png", "../image/book7.png"];
surnames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes"];
conditions = ["New", "Excellent", "Good", "Fair", "Poor"];

var itemList = [];
var wishList = [];
var cartList = [];
for (var i = 0; i < 300; i++) {
    courseName = courses[Math.floor(Math.random() * courses.length)];
    courseNum = codes[Math.floor(Math.random() * codes.length)];
    cover = bookCovers[Math.floor(Math.random() * bookCovers.length)];
    surname = surnames[Math.floor(Math.random() * surnames.length)];
    firstInitial = letters[Math.floor(Math.random() * letters.length)];
    rating = Math.random() * 5;
    isbn = codes[Math.floor(Math.random() * codes.length)] + codes[Math.floor(Math.random() * codes.length)] + codes[Math.floor(Math.random() * codes.length)];
    edition = Math.floor(Math.random() * 10);
    courseListBooks = []
    courseListBooks.push(`${courseName} ${courseNum}`);
    for (var j = 0; j < 2; j++) {
        courseListBooks.push(`${courses[Math.floor(Math.random() * courses.length)]} ${codes[Math.floor(Math.random() * codes.length)]}`);
    }
    price_cond = []
    for (var j = 0; j < 20; j++) {
        price_cond.push(new PriceCondElement(Math.floor(Math.random() * 4000 + 1000) / 100, conditions[Math.floor(Math.random() * conditions.length)]));
    }
    itemList.push(new BookListElement(i, cover, `${courseName} ${edition}`, rating, `${firstInitial}. ${surname}`, isbn, edition, price_cond, courseListBooks));
}
localStorage.setItem('itemList', JSON.stringify(itemList));
localStorage.setItem('wishList', JSON.stringify(wishList));
localStorage.setItem('cartList', JSON.stringify(cartList));
// console.log(JSON.parse(localStorage.getItem('itemList')));

function getHTMLEmptyList() {
    return `<div class="col-12 py-4">
                <div class="cart-wish-list-empty-wrapper" style="height:auto;">
                <div class="cart-wish-list-empty" style="height:auto;">
                <p>Uh oh, looks like our search came up empty. Feel free to <a href="explore.html">explore our selection</a> of books and find something that suits your taste. In the meantime, we'll wait right here.</p>
            </div>
            </div>
            </div>`;
}

//used to sort objects with the sorter
const DirectionEnum = Object.freeze({
    ASCENDING: 1,
    DESCENDING: 2,
    NONE: 3
})

//displays all explore page items, ordering them by rating (specified by `direction`),
//eliminating those that do not satisfy the minimum rating, and displaying no more than
//the max numOfItems
function updateItemListingSortedByRating(direction, minRating, numOfItems) {
    $("#itemTemplate").empty();
    revisedItemList = itemList.filter(val => val.rating >= minRating);
    if(searchString != "") {
        revisedItemList = revisedItemList.filter(elem => elem.title.toLowerCase().includes(searchString.toLowerCase()));
    }

    if (direction !== DirectionEnum.NONE) {
        revisedItemList.sort((a, b) => {
            if (a.rating < b.rating) { return -1; }
            else if (a.rating > b.rating) { return 1; }
            else return 0;
        });
        if (direction === DirectionEnum.DESCENDING) {
            revisedItemList.reverse();
        }
    }
    
    for (var i = 0; i < revisedItemList.length; i++) {
        if (i < numOfItems) {
            //Need this constant or else i changes value inside the function!
            const index = i;
            $("#itemTemplate").append(revisedItemList[i].getHTML());
            $(`#book-list-element-${revisedItemList[i].id}`).children().eq(0).children().eq(4).click(function (e) {
                if (!cartList.some(function(elem) {return JSON.stringify(elem) === JSON.stringify(revisedItemList[index]);})) {
                    cartList.push(revisedItemList[index]);
                    localStorage.setItem('cartList', JSON.stringify(cartList));
                    console.log(index, cartList);
                    
                }
                e.stopPropagation();  
            });
            $(`#book-list-element-${revisedItemList[i].id}`).children().eq(1).children().eq(1).children().eq(8).children().eq(0).click(function (e) {
                if (!cartList.includes(revisedItemList[index])) {
                    cartList.push(revisedItemList[index]);
                    localStorage.setItem('cartList', JSON.stringify(cartList));
                    console.log(cartList);
                    
                }
                e.stopPropagation();
            });
            $(`#book-list-element-${revisedItemList[i].id}`).children().eq(1).children().eq(1).children().eq(9).children().eq(0).click(function (e) {
                if (!wishList.includes(revisedItemList[index])) {
                    wishList.push(revisedItemList[index]);
                    localStorage.setItem('wishList', JSON.stringify(wishList));
                    console.log(wishList);
                    
                }
                e.stopPropagation();
            });
            $(`#book-list-element-${revisedItemList[i].id}`).click(function (e){
                // console.log(JSON.stringify(revisedItemList[i]))
                
                localStorage.setItem("itemDetails", JSON.stringify(revisedItemList[index]))
                window.location.href = 'itemDetails.html';
            })
        } else { break; }
    }

    if (revisedItemList.length === 0) {
        $("#itemTemplate").append(getHTMLEmptyList());
    }

    //used to get correct hover behaviour (prevent the hover object
    //from moving around when trying to interact with the hovered object)
    var prevMouseEvent;
    $(".hide-item-details").mouseenter(function (e) {
        prevMouseEvent = e;
    })

    $(".explore-item-image").mouseenter(function (e) {
        if (prevMouseEvent != null) { return; }
        e.preventDefault();
        rect = document.documentElement.getBoundingClientRect();
        var xPos = e.pageX - document.documentElement.scrollLeft;
        
        //mouse is on right third of the page, display the hover to the left of the mouse
        if (xPos >= 2 * rect.right / 3) {
            $(".hide-item-details").css('left', '');
            $(".hide-item-details").css('right', rect.right - xPos);

        }
        //mouse is in the center of the page, display the hover in the center of the mouse
        else if (xPos > 3 * rect.right / 8 && xPos < 2 * rect.right / 3) {
            $(".hide-item-details").css('right', '');
            $(".hide-item-details").css('left', xPos - $(".hide-item-details").width() / 2);

        }
        //left half, display hover to the right of the mouse
        else {
            $(".hide-item-details").css('right', '');
            $(".hide-item-details").css('left', xPos);
        }

        var yPos = e.pageY - document.documentElement.scrollTop;

        //if the hover would be cut off by the bottom of the screen, display the hover above the mouse's position
        if (e.clientY + $(".hide-item-details").height() > window.innerHeight) {
            $(".hide-item-details").css('top', '');
            $(".hide-item-details").css('bottom', window.innerHeight - e.clientY);
        }
        else {
            $(".hide-item-details").css('bottom', '');
            $(".hide-item-details").css('top', yPos);
        }
        $(this).parent().next().css('display', 'flex');

    });
    $(".explore-item-parent").mouseleave(function (e) {
        $(this).children().eq(1).css('display', 'none');
        prevMouseEvent = null;
    });

}

//attach an id to a button (allows us to change the contents of the button when they are pressed)
function updateButtonText(id, newText, icon) {
    document.getElementById(id).textContent = newText;
    $(`#${id}`).append(icon);
}

// defaults for sorting and filters
var showRating = 0;
var showRatingDirection = DirectionEnum.NONE;
var numOfItems = 50;

window.addEventListener('load', function (e) {
    searchString = localStorage.getItem('searchString') ?? "";
});

$(document).ready(function () {
    searchString = localStorage.getItem('searchString') ?? "";
    for (var i = 0; i < itemList.length; i++) {
        $("#itemTemplate").append(itemList[i].getHTML());
    }
    //make the left filter buttons work
    updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
    for (var i = 0; i < 6; i++ ) {
        const index = i;
        sellerRating = document.getElementById(`sellerRating${i}`);
        sellerRating.addEventListener("click", function () {
            showRating = index;
            updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
        });
    }
    //make the ordering sorters work
    orderByRating = document.getElementById("rateAscending");
    orderByRating.addEventListener("click", function () {
        showRatingDirection = DirectionEnum.ASCENDING;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
        updateButtonText("dropdownMenuButtonSortBy", "Sorted by Rating ", '<i class="fas fa-arrow-up"></i>\n');

    });
    orderByRating = document.getElementById("rateDescending");
    orderByRating.addEventListener("click", function () {
        showRatingDirection = DirectionEnum.DESCENDING;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
        updateButtonText("dropdownMenuButtonSortBy", "Sorted by Rating ", '<i class="fas fa-arrow-down"></i>\n');

    });
    //make the number of items dropdown work
    orderByRating = document.getElementById("show10Items");
    orderByRating.addEventListener("click", function () {
        numOfItems = 10;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
        updateButtonText("dropdownMenuButtonShow", `Showing ${numOfItems} Items`);
    });
    orderByRating = document.getElementById("show20Items");
    orderByRating.addEventListener("click", function () {
        numOfItems = 20;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
        updateButtonText("dropdownMenuButtonShow", `Showing ${numOfItems} Items`);
    });
    orderByRating = document.getElementById("show50Items");
    orderByRating.addEventListener("click", function () {
        numOfItems = 50;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
        updateButtonText("dropdownMenuButtonShow", `Showing ${numOfItems} Items`);
    });
    orderByRating = document.getElementById("show100Items");
    orderByRating.addEventListener("click", function () {
        numOfItems = 100;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
        updateButtonText("dropdownMenuButtonShow", `Showing ${numOfItems} Items`);
    });

});