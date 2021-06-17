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

spinner.addEventListener("click", function() {
    this.style.display = "none";
    border.style.display = "none";
    document.querySelector(".aos").style.opacity = 1;
});

document.getElementById("tl").addEventListener("mouseover", function() {
    this.style.color = "red";
    bg.style.backgroundColor = "black";
    document.getElementById("br").style.color = "#363535";
});

document.getElementById("bl").addEventListener("mouseover", function() {
    this.style.color = "red";
    bg.style.backgroundColor = "black";
    document.getElementById("tr").style.color = "#363535";

});

let backcard = document.querySelector(".cardback");
document.querySelector(".aos").addEventListener("mousedown", function() {
    this.style.transform = "rotateY(180deg)";
    this.style.opacity = 0;
    backcard.style.transform = "rotateY(0deg)";
    backcard.style.opacity = "1";

});

document.querySelector(".aos").addEventListener("mouseup", function() {
    this.style.transform = "rotateY(0deg)";
    this.style.opacity = 1;
    backcard.style.transform = "rotateY(180deg)"
    backcard.style.opacity = "0";

});
// document.getElementById("br").addEventListener("mouseover", function() {
//     this.style.color = "black";
//     bg.style.backgroundColor = "#363535";
//     spinner.style.color = "black";
// });

// document.getElementById("tr").addEventListener("mouseover", function() {
//     this.style.color = "black";
//     bg.style.backgroundColor = "#363535";
// });