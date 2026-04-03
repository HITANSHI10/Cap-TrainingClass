//console.log(window);

// console.log("HELLO");
// window.console.log("hello");

// console.log(document);
// console.log(document.head);
// console.log(document.body);

// console.log(document.body.childNodes);
// console.log(document.body.children);

// console.log(document.body.childNodes[3]);
// console.log(document.body.children[3]);

//console.log(document.body);

// let btn1 = document.body.children[2]
// console.log(btn1.parentElement);
// console.log(btn1.parentNode);

//let div1 = document.body.children[3];
// console.log(div1.firstChild);
// console.log(div1.firstElementChild);
// console.log(div1.lastChild);
// console.log(div1.lastElementChild);
// console.log(div1.nextElementSibling);

// let head1 = div1.firstElementChild
// console.log(head1.nextElementSibling);

// let head2 = div1.lastElementChild
// console.log(head2.previousElementSibling)
// console.log(head2.previousSibling);


//!dom direct access methods

//?get element by id -> it returns the first value
// let h1=document.getElementById("headd")
// console.log(h1);

//?get element by class
// let h4=document.getElementsByClassName("h44")
// console.log(h4);
// let convertedarray=Array.from(h4)
// console.log(convertedarray);
// convertedarray.map((ele)=>{
//     ele.style.color="white"
//     ele.style.backgroundColor="blue"
// })


//?get element by name 
// let btnname = document.getElementsByName("btn")
// console.log(btnname);

// let h11=document.getElementsByTagName("h1")
// console.log(h11);

//?query selector
// let h12=document.querySelector(".h44")
// console.log(h12);

// let h13=document.querySelectorAll(".h44")
// console.log(h13);
// let convertedarray1=Array.from(h13)
// console.log(convertedarray1);

//!createElement
// let h1=document.createElement("h1")
// h1.innerHTML="javascript"
// document.body.append(h1)

// let p=document.createElement("p")
// p.textContent="playwright"
// p.setAttribute("id","p1")
// document.body.append(p)
// console.log(p);
// p.removeAttribute("id")
// console.log(p);
// document.body.removeChild(p);


//?event handling

//inline handling 
// let btn2=document.getElementById("btn1")

// function demo(){
//     alert("button clicked")
// }


//2nd way
// let btn2=document.getElementById("btn1")
// btn1.onclick=function demo(){
//     alert("clicked")
// }

//most preferable
//!addeventlistener

/**
 * syntax
 * 
 * element.addeventlistener("event",callback)
 */

// let btn2=document.getElementById("btn1")
// btn1.addEventListener("click",()=>{
//     document.body.style.backgroundColor="blue"
//     let img1=document.createElement("img")
//     img1.setAttribute("src","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEDaMEoX0Tkzqw74YSBab3HI2czZ14hUpGxq1Wuko5h6hGPVhF")
//     document.body.append(img1)
// })

// let btn4=document.getElementById("btn")
// let isWhite = true; 

// btn4.addEventListener("click", () => {
//   if (isWhite) {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     btn.innerText = "Dark Mode";
//   } else {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     btn.innerText = "Light Mode";
//   }

//   isWhite = !isWhite; 
// });

