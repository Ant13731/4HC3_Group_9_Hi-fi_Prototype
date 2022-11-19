//inspiration taken from https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = null;

        } else {
            panel.style.maxHeight = `calc(2rem + ${panel.scrollHeight}px)`;
            panel.style.paddingTop = "1rem";
            panel.style.paddingBottom = "1rem";
        }
    });
}

//make the leftmost filters as an accordion widget
//Note: only the rating buttons work

//save us some code by storing the buttons internally as just an id and name
class FilterListItem {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getHTML() {
        return `<button class="filter-button" id="${this.id}">${this.name}</button>\n`;
    }
}
//dummy data

courseList = [
    new FilterListItem("filterCourse1", "COMPSCI 3GC3"),
    new FilterListItem("filterCourse2", "MATH 3GC3"),
    new FilterListItem("filterCourse3", "HEALTHSCI 3GC3"),
    new FilterListItem("filterCourse4", "ENGSCTY 3GC3"),
    new FilterListItem("filterCourse5", "SCAR 3GC3"),
    new FilterListItem("filterCourse6", "STATS 3GC3"),
    new FilterListItem("filterCourse7", "MUSIC 3GC3"),
    new FilterListItem("filterCourse8", "SOFTWARE 3GC3"),
    new FilterListItem("filterCourse9", "SOCSCI 3GC3"),
];
facultyList = [
    new FilterListItem("facultyOfEng", "Engineering"),
    new FilterListItem("facultyOfHum", "Humanities"),
    new FilterListItem("facultyOfSocSci", "Social Science"),
    new FilterListItem("facultyOfSci", "Science"),
    new FilterListItem("facultyOfHealthSci", "Health Science"),
    new FilterListItem("facultyOfBus", "Business"),

];
dateFilterList = [
    new FilterListItem("filterDateOneDayAgo", "One Day Ago"),
    new FilterListItem("filterDateTwoDaysAgo", "Two Days Ago"),
    new FilterListItem("filterDateThreeDaysAgo", "Three Days Ago"),
    new FilterListItem("filterDateOneWeekAgo", "One Week Ago"),
    new FilterListItem("filterDateOneMonthAgo", "One Month Ago"),
    new FilterListItem("filterDateOneYearAgo", "One Year Ago"),
];
sellerRatingList = [
    new FilterListItem("sellerRating5", "5 Stars"),
    new FilterListItem("sellerRating4", "4 Stars"),
    new FilterListItem("sellerRating3", "3 Stars"),
    new FilterListItem("sellerRating2", "2 Stars"),
    new FilterListItem("sellerRating1", "1 Star"),
    new FilterListItem("sellerRating0", "0 Stars"),

];

filterSearchForm = `<div style="padding-left:2.5%">
                    <form action="" class="filter-search-form" id="courseFilter">
                        <label for="search-box" class="fas fa-search"></label>
                        <input type="search" name="course" placeholder="Search courses" id="search-box">
                    </form></div`;

// allows the search bar in the filter to work
function updateFilterResults(searchString) {
    $("#CourseListFilters").empty();
    $("#CourseListFilters").append(filterSearchForm);
    revisedCourseList = courseList.filter(val => val.name.toLowerCase().includes(searchString.toLowerCase()));
    for (var i = 0; i < revisedCourseList.length; i++) {
        $("#CourseListFilters").append(revisedCourseList[i].getHTML());
    }
    courseFilterSearch = document.getElementById("courseFilter").course;
    courseFilterSearch.addEventListener("keydown", function (keypress) {
        if (keypress.code === "Enter") {
            updateFilterResults(keypress.target.value)
        }
    });

}

$(document).ready(function () {
    //set up all filters
    $("#CourseListFilters").append(filterSearchForm);
    for (var i = 0; i < courseList.length; i++) {
        $("#CourseListFilters").append(courseList[i].getHTML());
    }
    for (var i = 0; i < facultyList.length; i++) {
        $("#FacultyListFilters").append(facultyList[i].getHTML());
    }
    for (var i = 0; i < dateFilterList.length; i++) {
        $("#DateAddedListFilters").append(dateFilterList[i].getHTML());
    }
    for (var i = 0; i < sellerRatingList.length; i++) {
        $("#SellerRatingListFilters").append(sellerRatingList[i].getHTML());
    }
    courseFilterSearch = document.getElementById("courseFilter").course;
    courseFilterSearch.addEventListener("keydown", function (keypress) {
        if (keypress.code === "Enter") {
            updateFilterResults(keypress.target.value)
        }
    });
})

