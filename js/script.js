// Theme (dark/light) toggle
document.getElementById("theme-toggle").onclick = function () {
    document.getElementsByTagName("body")[0].classList.toggle("dark");
    // Save theme in sessionStorage
    if (document.getElementsByTagName("body")[0].classList.contains("dark")) {
        sessionStorage.setItem("theme", "dark");
    } else {
        sessionStorage.setItem("theme", "light");
    }
};

// Check the stored theme when the page loads
window.onload = function () {
    // Check sessionStorage and set theme
    var storedTheme = sessionStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.getElementsByTagName("body")[0].classList.add("dark");
    }
};

// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu.
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}