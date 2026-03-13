let count=0;

let counter = document.getElementById("counter");
let plusbutton = document.getElementById("plus");

plusbutton.addEventListener("click",()=>{
    count=count+1;
    counter.textContent = count;
})

let minusbutton = document.getElementById("minus");

minusbutton.addEventListener("click",()=>{
    count=count-1;
    counter.textContent = count;
})

let resetbutton = document.getElementById("reset")

resetbutton.addEventListener("click",()=>{
    count =0;
    counter.textContent = count;
})