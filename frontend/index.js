const toggleBtn=document.getElementById("toggleBtn");
const prof=document.getElementById("prof");
const name=document.getElementById("name");
const gender=document.getElementById("gender");

let isJane=true;

toggleBtn.addEventListener("click",()=>{
    if (isJane) {
        prof.src = "./images/john.png";
        name.textContent = "John Doe";
        gender.textContent = "Male";
    } else {
        prof.src = "./images/jane.png";
        name.textContent = "Jane Doe";
        gender.textContent = "Female";
    }

    isJane = !isJane;
});
