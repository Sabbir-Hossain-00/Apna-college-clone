let signUp = document.querySelector(".b2");

let signUpPage = document.querySelector(".sign-up");

let signUpCross = document.querySelector(".sign-up-btn-1");

let mainContent1 = document.querySelector(".main-content-1");
let mainContent3 = document.querySelector(".main-content-3");

let newAlphaBtn = document.querySelector(".b1");
let exploreNewBatch = document.querySelector(".b3");
let exploreNew = document.querySelector(".b4");

let explore = document.querySelector(".explore");

let navBar = document.querySelector (".navbar");

let logo = document.querySelector(".logo");






signUp.addEventListener("click",()=>{
    signUpPage.style.display = "flex";
    mainContent1.style.display = "none";
    mainContent3.style.display = "none";
});

signUpCross.addEventListener("click",()=>{
    signUpPage.style.display = "none";
    mainContent1.style.display = "block";

});


newAlphaBtn.addEventListener("click",()=>{
    mainContent1.style.display = "none";
    explore.style.display = "block";
})

exploreNewBatch.addEventListener ("click",()=>{
    mainContent1.style.display = "none";
    explore.style.display = "block";
})


exploreNew.addEventListener ("click",()=>{
    mainContent1.style.display = "none";
    explore.style.display = "block";
});


logo.addEventListener("click",()=>{
    console.log("hello");
    mainContent1.style.display = "block";
})