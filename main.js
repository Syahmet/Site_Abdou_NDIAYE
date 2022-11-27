// When the user scrolls the page, execute myFunction
//window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementsByClassName("header");
menu = document.getElementsByClassName("header-right");


// Get the offset position of the navbar
var sticky = navbar.offsetTop;
menu.addEventListener("click", function() { alert("Hello World!"); });
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    console.log("test 1");
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}