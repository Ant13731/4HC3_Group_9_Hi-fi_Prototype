document.getElementById("search-box").addEventListener("keypress", function(e) {

	if(e.key === "Enter") {
		e.preventDefault();
		localStorage.setItem('searchString', document.getElementById("search-box").value);
		window.location.href = "views/explore.html";
	}

});
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

document.querySelector("#buy-item-now").onclick = () => {
	localStorage.setItem('itemDetails', JSON.stringify(fakeBook));
	localStorage.setItem('cartList', JSON.stringify([]));
	localStorage.setItem('wishList', JSON.stringify([]));
	window.location.href = "views/itemDetails.html";
};

searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
	searchForm.classList.toggle("active");
};

let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
	loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
	loginForm.classList.remove("active");
};

window.onscroll = () => {
	searchForm.classList.remove("active");

	if (window.scrollY > 80) {
		document.querySelector(".header").classList.add("active");
	} else {
		document.querySelector(".header").classList.remove("active");
	}
};

window.onload = () => {
	if (window.scrollY > 80) {
		document.querySelector(".header").classList.add("active");
	} else {
		document.querySelector(".header").classList.remove("active");
	}

	fadeOut();
};

function loader() {
	document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
	setTimeout(loader, 400);
}

var swiper = new Swiper(".books-slider", {
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 1,
		},
	},
});

var swiper = new Swiper(".featured-slider", {
	spaceBetween: 10,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 1,
		},
	},
});

var swiper = new Swiper(".arrivals-slider", {
	spaceBetween: 10,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".reviews-slider", {
	spaceBetween: 10,
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".blogs-slider", {
	spaceBetween: 10,
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});
