console.log("Helloooos");

var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");


pass.addEventListener('input', () =>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    } else{
        msg.style.display = "none";
    }

    if(pass.value.length < 4){
        str.innerHTML = "weak";
        str.style.color = "red";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "medium";
        str.style.color = "yellow";
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong";
        str.style.color = "green";

    }

})