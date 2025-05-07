const closebtn = document.getElementById("closebtn"); 

const slider = document.querySelector(".slider");
closebtn.addEventListener("click", function() {
    slider.style.marginLeft = "-250px";
});

const slidebarBtn = document.getElementById("slidebar"); 

slidebarBtn.addEventListener("click", function () {
    slider.style.marginLeft = "0"; 
});
