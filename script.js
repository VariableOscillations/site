// - - - - - - - - - - - - theme - - - - - - - - - - - - //

const togl = document.querySelector(".btn-theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var r = document.querySelector('body');
const pixl = 175;

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");

    // display dev nav line correctly on load
    var rs = getComputedStyle(r);
    if (document.body.scrollTop > pixl || document.documentElement.scrollTop > pixl) {
      r.style.setProperty('--switch', rs.getPropertyValue('--txt'));
    } else {
      r.style.setProperty('--switch', rs.getPropertyValue('--bgnd'));
    }
}

togl.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);

    // display dev nav line correctly on theme button switch
    var rs = getComputedStyle(r);
    if (document.body.scrollTop > pixl || document.documentElement.scrollTop > pixl) {
      r.style.setProperty('--switch', rs.getPropertyValue('--txt'));
    } else {
      r.style.setProperty('--switch', rs.getPropertyValue('--bgnd'));
    }
});

// - - - - - - - - - - - - scroll dev nav line - - - - - - - - - - - - //
// display dev nav line when window is scrolled past value of pixl
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var rs = getComputedStyle(r);
  if (document.body.scrollTop > pixl || document.documentElement.scrollTop > pixl) {
    r.style.setProperty('--switch', rs.getPropertyValue('--txt'));
  } else {
    r.style.setProperty('--switch', rs.getPropertyValue('--bgnd'));
  }
}
