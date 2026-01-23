// console.log(document);


// console.log(document.title);
// document.title = "DOM Updated Title";


// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


// const btn = document.getElementById("btn");
// const text = document.getElementById("text");
// const img = document.getElementById("img1");
// const styleText = document.getElementById("styleText");


// btn.addEventListener("click", function () {
//     text.innerHTML = "you have clicked the wrong button!";
// });




// console.log(img.src);
// // img.src = "image2.jpg"; 


// console.log(text);              
// console.log(text.firstChild);   


// styleText.style.color = "blue";
// styleText.style.fontSize = "20px";


// console.log(text.parentNode);
// console.log(document.body.childNodes);


// const newPara = document.createElement("p");
// newPara.textContent = "Created using JavaScript DOM";
// document.body.appendChild(newPara);


// document.body.addEventListener("click", function () {
//     console.log("Body clicked");
// });

const form=document.querySelector("form");
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.event.log(event.srcElement[0].value)
    console.event.log(event.srcElement[1].value)
    console.log(event)
    console.log("Form submitted");
    
})





