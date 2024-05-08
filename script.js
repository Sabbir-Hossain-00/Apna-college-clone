let signUp = document.querySelector(".b2");

let login = document.querySelector ("#ll1");

let login2 = document.querySelector ("#ll2");

let signUpPage = document.querySelector(".sign-up");

let signUpCross = document.querySelector(".sign-up-btn-1");

let mainContent1 = document.querySelector(".main-content-1");
let mainContent3 = document.querySelector(".main-content-3");

let newAlphaBtn = document.querySelector(".b1");
let exploreNewBatch = document.querySelector(".b3");
let exploreNew = document.querySelector(".b4");

let explore = document.querySelector(".explore");

let navBar = document.querySelector (".navbar");

let signUp2 = document.querySelector("#bb2");

let newAlphaBtn2 = document.querySelector("#bb1");

let home1 = document.querySelector("#hm1");

let home2 = document.querySelector("#hm2");
let logo1 =document.querySelector("#lg1");
let logo2 =document.querySelector("#lg2");

let menuBtn = document.querySelector(".menu");

let menuPage = document.querySelector(".menu-page");

let menuCross = document.querySelector(".menu-content-1-1");








signUp.addEventListener("click",()=>{
    console.log("clicked sign up");
    signUpPage.style.display = "flex";
    mainContent1.style.display = "none";
});

signUp2.addEventListener("click",()=>{
    console.log("hhh");
    signUpPage.style.display = "flex";
    mainContent1.style.display = "none";
    mainContent3.style.display = "none";

});

login.addEventListener("click",()=>{
    signUpPage.style.display = "flex";
    mainContent1.style.display = "none";
});

login2.addEventListener("click",()=>{
    signUpPage.style.display = "flex";
    mainContent1.style.display = "none";
    mainContent3.style.display = "none";
})

signUpCross.addEventListener("click",()=>{
    signUpPage.style.display = "none";
    mainContent1.style.display = "block";

});


newAlphaBtn.addEventListener("click",()=>{
    console.log("clicked exx");
    mainContent1.style.display = "none";
    explore.style.display = "block";
});

newAlphaBtn2.addEventListener("click",()=>{
    console.log("ggg");
})

exploreNewBatch.addEventListener ("click",()=>{
    mainContent1.style.display = "none";
    explore.style.display = "block";
});

exploreNew.addEventListener ("click",()=>{
    mainContent1.style.display = "none";
    explore.style.display = "block";
});


logo1.addEventListener("click",()=>{
    console.log("hello");
    mainContent1.style.display = "block";
});

logo2.addEventListener("click",()=>{
    console.log("hello");
    mainContent1.style.display = "block";
    mainContent3.style.display = "none";
});

home1.addEventListener("click",()=>{
    console.log("hm1");
    mainContent1.style.display = "block";
});

home2.addEventListener("click",()=>{
    console.log("hm1");
    mainContent1.style.display = "block";
    mainContent3.style.display = "none";
});


menuBtn.addEventListener("click",()=>{
    mainContent1.style.display = "none";
    mainContent3.style.display = "none";
    menuPage.style.display = "block";
});

menuCross.addEventListener("click",()=>{
    menuPage.style.display = "none";
    mainContent1.style.display = "block";
});


