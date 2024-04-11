let container = document.querySelector(".container");
let card = document.querySelector(".card");
let button = document.querySelector(".toggle");

button.addEventListener("click",()=>{
    container.classList.toggle("dark")?(toggle.firstElementChild.className = "far fa-moon"):(toggle.firstElementChild.className = "far fa-sun");
});

// let change=()=>{
//     let mode =" light";

//       if(mode=="light"){
//         container.classList.add("dark");
//         card.classList.add("dark");
//         card.style.boxShadow = "0 2rem 2rem white"
//       }else{
//         container.classList.remove("dark");
//         card.classList.remove("dark");
//         card.style.boxShadow = "0 2rem 2rem white"
//       }
//       console.log(mode);
// }