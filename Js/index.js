const imageOnPhotos = document.querySelectorAll(".photos a");
const popup = document.querySelector(".popup");
const bigImg = document.querySelector(".slider img");
imageOnPhotos.forEach((img)=>{
    img.addEventListener("click",function(e){
        e.preventDefault();    
        // oz funksionalligin elinden alag
console.log(this);
// console.log(this.href);
let imgSrc = this.getAttribute("href");
console.log(bigImg);
bigImg.setAttribute("src" ,imgSrc);
popup.style.display ="flex";
// console.log(imgSrc);




    });
});

document.addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("popup")){
        console.log(e.target);
        popup.style.display=none;

    }
});