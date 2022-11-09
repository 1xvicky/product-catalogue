// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================


const link = document.getElementsByClassName("link");
const hamburger = document.getElementsByClassName("hamburger");
link[0].style.display = "none";


//automatically toggle for harmburger . . . . 
hamburger[0].onclick =()=>{
    if(link[0].style.display == "none"){
        link[0].style.display = "flex";
    }else{link[0].style.display = "none"}
}







// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================
// const productTab = document.querySelector('name:"tabset"' );
const productTab = document.getElementsByName("tabset");
const catalogue = document.querySelectorAll('.catalogue');

productTab[i].addEventListener('change', (e)=>{
    //handle change
   
    if(true){alert("item not found!")}
    productTab.forEach(){}
})




// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================