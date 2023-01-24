console.log("tajne przez poufne");

function deleteChild() { 
    var e = document.querySelector("body"); 
    
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
} 
var btn = document.getElementById( 
"btn").onclick = function() { 
    deleteChild(); 
} 