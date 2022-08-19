let navLinks = document.querySelectorAll("#links li a");

navLinks.forEach((e) => {
    e.addEventListener("click", (el) => {
        navLinks.forEach((btn) => {

            btn.classList.remove("active")
        });
        el.target.classList.add("active")
    });
});

let scrollUpBtn = document.querySelector(".scroll-up");

window.onscroll = function () {
    if (window.scrollY >= 800) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.onclick = function () {
    window.scrollTo(0, 0);
};
// Start Our Work Filter
let portfolioLis = document.querySelectorAll("#our-work ul li");
let boxs = Array.from(document.querySelectorAll("#our-work .row .box-container"));

portfolioLis.forEach((ele) => {
    ele.addEventListener("click", removeActive);
    ele.addEventListener("click", mangeImgs);
})

function removeActive() {
    portfolioLis.forEach((e) => {
        e.classList.remove("active");
        this.classList.add("active");
    })
}


function mangeImgs() {
    boxs.forEach((el) => {
        el.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        console.log(this);
        el.style.display = "block";
    })
}
// End Our Work Filter