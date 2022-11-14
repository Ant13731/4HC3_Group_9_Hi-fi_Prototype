
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
                    <div class="explore-item p-4 item-details">
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

courses = [
    "ABLD",
    "ANTHROP",
    "ARABIC",
    "ART",
    "ARTHIST",
    "ARTSSCI",
    "ASTRON",
    "AUTOTECH",
    "BIOCHEM",
    "BIOLOGY",
    "BIOMEDDC",
    "BIOPHYS",
    "BIOSAFE",
    "BIOTECH",
    "CAYUGA",
    "CHEM",
    "CHEMBIO",
    "CHEMBME",
    "CHEMENG",
    "CHINESE",
    "CIVBME",
    "CIVENG",
    "CIVTECH",
    "CLASSICS",
    "CMST",
    "CMTYENGA",
    "COLLAB",
    "COMMERCE",
    "COMPENG",
    "COMPSCI",
    "DATASCI",
    "EARTHSC",
    "ECON",
    "ELECBME",
    "ELECENG",
    "ENGINEER",
    "ENGLISH",
    "ENGNMGT",
    "ENGPHYS",
    "ENGSOCTY",
    "ENGTECH",
    "ENRTECH",
    "ENVIRSC",
    "ENVSOCTY",
    "EPHYSBME",
    "EXPLORE",
    "FARSI",
    "FRENCH",
    "GENDRST",
    "GENTECH",
    "GERMAN",
    "GLOBALZN",
    "GREEK",
    "HEBREW",
    "HISTORY",
    "HLTHAGE",
    "HTHSCI",
    "HUMAN",
    "HUMBEHV",
    "IARTS",
    "IBEHS",
    "IBH",
    "INDIGST",
    "INNOVATE",
    "INSPIRE",
    "INTENG",
    "ISCI",
    "ITALIAN",
    "JAPANESE",
    "KINESIOL",
    "KOREAN",
    "LABRST",
    "LATAM",
    "LATIN",
    "LIFESCI",
    "LINGUIST",
    "MANTECH",
    "MATH",
    "MATLS",
    "MATLSBME",
    "MECHBME",
    "MECHENG",
    "MECHTRON",
    "MEDIAART",
    "MEDPHYS",
    "MEDRADSC",
    "MELD",
    "MIDWIF",
    "MOHAWK",
    "MOLBIOL",
    "MUSIC",
    "MUSICCOG",
    "NEUROSCI",
    "NURSING",
    "OJIBWE",
    "PEACJUST",
    "PHARMAC",
    "PHILOS",
    "PHYSICS",
    "PNB",
    "POLISH",
    "POLSCI",
    "PROCTECH",
    "PSYCH",
    "RUSSIAN",
    "SANSKRIT",
    "SCAR",
    "SCICOMM",
    "SCIENCE",
    "SEP",
    "SFGNTECH",
    "SFWRBME",
    "SFWRENG",
    "SFWRTECH",
    "SMRTTECH",
    "SOCIOL",
    "SOCPSY",
    "SOCSCI",
    "SOCWORK",
    "SPANISH",
    "STATS",
    "SUSTAIN",
    "THTRFLM",
    "TRONBME",
    "WHMIS",
    "WORKLABR"
]

var codes = [];
letters = "qwertyuiopasdfghjklzxcvbnm".toUpperCase();
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 26; j++) {
        for (var k = 0; k < 10; k++) {
            codes.push(`${i}${letters[j]}${k}`);
        }
    }
}
bookCovers = ["../image/book-1.png",
    "../image/book-2.png",
    "../image/book-3.png",
    "../image/book-4.png",
    "../image/book-5.png",
    "../image/book-6.png",
    "../image/book-7.png",
    "../image/book-8.png",
    "../image/book-9.png",
    "../image/book-10.png",
    "../image/book3.png",
    "../image/book5.png",
    "../image/book7.png",
]
surnames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
    "Clark",
    "Rodriguez",
    "Lewis",
    "Lee",
    "Walker",
    "Hall",
    "Allen",
    "Young",
    "Hernandez",
    "King",
    "Wright",
    "Lopez",
    "Hill",
    "Scott",
    "Green",
    "Adams",
    "Baker",
    "Gonzalez",
    "Nelson",
    "Carter",
    "Mitchell",
    "Perez",
    "Roberts",
    "Turner",
    "Phillips",
    "Campbell",
    "Parker",
    "Evans",
    "Edwards",
    "Collins",
    "Stewart",
    "Sanchez",
    "Morris",
    "Rogers",
    "Reed",
    "Cook",
    "Morgan",
    "Bell",
    "Murphy",
    "Bailey",
    "Rivera",
    "Cooper",
    "Richardson",
    "Cox",
    "Howard",
    "Ward",
    "Torres",
    "Peterson",
    "Gray",
    "Ramirez",
    "James",
    "Watson",
    "Brooks",
    "Kelly",
    "Sanders",
    "Price",
    "Bennett",
    "Wood",
    "Barnes",
    "Ross",
    "Henderson",
    "Coleman",
    "Jenkins",
    "Perry",
    "Powell",
    "Long",
    "Patterson",
    "Hughes",
    "Flores",
    "Washington",
    "Butler",
    "Simmons",
    "Foster",
    "Gonzales",
    "Bryant",
    "Alexander",
    "Russell",
    "Griffin",
    "Diaz",
    "Hayes"];


var itemList = []
for (var i = 0; i < 300; i++) {
    courseName = courses[Math.floor(Math.random() * courses.length)];
    courseNum = codes[Math.floor(Math.random() * codes.length)];
    cover = bookCovers[Math.floor(Math.random() * bookCovers.length)];
    surname = surnames[Math.floor(Math.random() * surnames.length)];
    firstInitial = letters[Math.floor(Math.random() * letters.length)];
    rating = Math.random() * 5;
    itemList.push(new BookListElement(cover, `${courseName} ${courseNum}`, rating, `${firstInitial}. ${surname}`));
}


const DirectionEnum = Object.freeze({
    ASCENDING: 1,
    DESCENDING: 2,
    NONE: 3
})

function updateItemListingSortedByRating(direction, minRating, numOfItems) {
    $("#itemTemplate").empty();
    revisedItemList = itemList.filter(val => val.rating >= minRating);
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

            $("#itemTemplate").append(revisedItemList[i].getHTML());
        } else { break; }
    }
}

function updateButtonText(id, newText, icon) {
    document.getElementById(id).textContent = newText;
    $(`#${id}`).append(icon);
}

// defaults
var showRating = 0;
var showRatingDirection = DirectionEnum.NONE;
var numOfItems = 50;

$(document).ready(function () {
    for (var i = 0; i < itemList.length; i++) {
        $("#itemTemplate").append(itemList[i].getHTML());
    }
    updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
    sellerRating = document.getElementById("sellerRating0");
    sellerRating.addEventListener("click", function () {
        showRating = 0;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);
    });
    sellerRating = document.getElementById("sellerRating1");
    sellerRating.addEventListener("click", function () {
        showRating = 1;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);

    });
    sellerRating = document.getElementById("sellerRating2");
    sellerRating.addEventListener("click", function () {
        showRating = 2;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);

    });
    sellerRating = document.getElementById("sellerRating3");
    sellerRating.addEventListener("click", function () {
        showRating = 3;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);

    });
    sellerRating = document.getElementById("sellerRating4");
    sellerRating.addEventListener("click", function () {
        showRating = 4;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);

    });
    sellerRating = document.getElementById("sellerRating5");
    sellerRating.addEventListener("click", function () {
        showRating = 5;
        updateItemListingSortedByRating(showRatingDirection, showRating, numOfItems);

    });
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