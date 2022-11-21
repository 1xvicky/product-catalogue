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
const productTab = document.getElementsByName("tabset");
const catalogue = document.querySelectorAll('.catalogue');

notFound=()=>{alert("item not found!")}

for(var i=0; i < productTab.length; i++){
productTab[i].addEventListener('change', (e)=>{ // handle change 
    if(e.target.value == "Male"){ return 0;}
    else if(e.target.value == "All"){return 0;}
    else{notFound();}
});
}



// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================

var search = document.querySelector('.search_product');
var title = document.querySelectorAll('.catalogue');
//document.getElementsByTagName
 
search.addEventListener('input', (e)=>{ // handle change
catalogue.forEach(searchItem)
});

function searchItem(){
    for(var i = 0; i < this.length; i++){
    catalogue[i].style.display = "none";
    if(e.value == catalogue[i].innerHTML){
        catalogue[i].style.display = "block";
    }
    else{alert("product not found!")}
}
}