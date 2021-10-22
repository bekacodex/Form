
// let list = document.querySelectorAll(".navigation li");
// function activeLink() {
//     list.forEach((item) =>
//         item.classList.remove("hovered"));
//     this.classList.add("hovered");
// }
// list.forEach((item) =>
//     item.addEventListener('mouseover', activeLink)
// );




let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active')
    main.classList.toggle('active')

}


// const toggle = document.querySelector(".toggle");
// const navigation = document.querySelector(".navigation");
// const main = document.querySelector(".main");



// toggle.addEventListener("click", () => {
//     navigation.classList.toggle("active");
// })
