document.getElementById("search-box").addEventListener("keypress", function(e) {

	if(e.key === "Enter") {
		e.preventDefault();
		localStorage.setItem('searchString', document.getElementById("search-box").value);
		window.location.href = "explore.html";
	}

});

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
		document.querySelector(".header .header-2").classList.add("active");
	} else {
		document.querySelector(".header .header-2").classList.remove("active");
	}
};

window.onload = () => {
	if (window.scrollY > 80) {
		document.querySelector(".header .header-2").classList.add("active");
	} else {
		document.querySelector(".header .header-2").classList.remove("active");
	}

	fadeOut();
};