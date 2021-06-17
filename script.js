console.log("Spin Spin Spin");
let spinner = document.querySelector(".spinner");
let border = document.querySelector(".border");
let bg = document.querySelector(".bg");
spinner.addEventListener("mouseenter", function(e) {
    this.style.transform = "rotate(600deg)";
    border.style.transform = "rotate(0deg)";

});

spinner.addEventListener("mouseleave", function(e) {
    this.style.transform = "rotate(0deg)";
    border.style.transform = "rotate(45deg)";
});

document.getElementById("tl").addEventListener("wheel", function() {
    this.style.color = "red";
    bg.style.backgroundColor = "black";
    document.getElementById("br").style.color = "#363535";
});

document.getElementById("bl").addEventListener("wheel", function() {
    this.style.color = "red";
    bg.style.backgroundColor = "black";
    document.getElementById("tr").style.color = "#363535";

});

document.getElementById("br").addEventListener("wheel", function() {
    this.style.color = "black";
    bg.style.backgroundColor = "#363535";
    spinner.style.color = "black";
});

document.getElementById("tr").addEventListener("wheel", function() {
    this.style.color = "black";
    bg.style.backgroundColor = "#363535";
});