console.log("Hej" + "  " + "Hej");
let button1 = document.querySelector(".stylbutton1");

button1.addEventListener("click" , () =>{
    if(button1.innerText === "Kurier jedzie 🛵"){
        button1.innerText = "Zamów";
        button1.classList.toggle("button1");
    }
    else{
        button1.innerText = "Kurier jedzie 🛵";
        button1.classList.toggle("button1");
    }
});