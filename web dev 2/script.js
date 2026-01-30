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

// const form=document.querySelector("form");
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.event.log(event.srcElement[0].value)
//     console.event.log(event.srcElement[1].value)
//     console.log(event)
//     console.log("Form submitted");
    
// })



// debugger
// console.log(a)
// console.log(b)


// var a=342
// let b=344


// console.log(a)
// console.log(b)

// function print(){
//     let c=40
//     console.log("inside fn")
// }

// print()

// function first(){
//     second()
// }

// function second(){
//     third()
// }

// function third(){
//     console.trace()
// }

// first()

// function infinite(){
//     infinite()
// }

// infinite()


// let total=100;

// function calculate(){
//     // console.log(total)
//     // let total=300
//     console.log(total)
//     var total=300
//     // console.log(total)
// }

// calculate()



// console.log("this is the beginning of the code")
// setTimeout(()=>{console.log("after 2 sec")},2000)
// console.log("this is the end of the code")



// setInterval(()=>{console.log("printing at every 2 second")},1000)



// const timeout=setTimeout(()=>{console.log("after 2 sec")},2000)
// clearTimeout(timeout)

// const interval=setInterval(()=>{console.log("printing at every 2 second")},1000)
// console.log(interval)
// setTimeout(()=>{clearInterval(interval)},10000)

// const interval2=setInterval(()=>{console.log("printing at every 2 second")},1000)
// console.log(interval2)



// let count=0;
// const interval=setInterval(()=>{
//     count+=1
//     console.log(count)
//     if (count==10){
//         clearInterval(interval)
//     }
// },1000)5



// const studentName=document.querySelector('#name')
// const button=document.querySelector('.btn')
// const list=document.querySelector('.list')

// button.addEventListener('click',()=>{
//     const li=document.createElement('li')
//     const deleteButton=document.createElement('button')

//     li.innerText=studentName.value
//     deleteButton.innerText="delete"

//     deleteButton.addEventListener('click',()=>{
//         list.removeChild(li)
//     })

//     li.appendChild(deleteButton)
//     list.appendChild(li)
//     studentName.value=""
// })  



// function print(){    // callback fn
//     console.log("inside print")
// }

// function greet(print){   // higher order fn
//     setTimeout(()=>{
//         console.log("hello student")
//         print()
//     },2000) 
// }

// greet(print)



// console.log("starting homework...");

// setTimeout(()=>{
//     console.log("homework done!");
//     console.log("starting dinner...");

//     setTimeout(()=>{
//         console.log("dinner done!");
//         console.log("getting ready to go out...");

//         setTimeout(()=>{
//             console.log("going to the playground!");

//         },1000)   // aftrer dinner

//     },3000)    // dinner time 

// },5000)     // homework time 



// function finishHomework(callback) {
//          console.log("starting homework...");
//          setTimeout(()=>{
//             console.log("homework done!");
//             callback();
//          },4000);
// }

// function eatDinner(callback) {
//          console.log("eating dinner...");
//          setTimeout(()=>{
//             console.log("dinner done!");
//             callback();
//          },2000);
// }

// function goToPlayground(callback) {
//          console.log("going to the playground...");
// }


// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     });
// });



// const p = new Promise((resolve,reject)=>{ //resolve()
//     //reject()  // if empty shows pending
// })

// console.log(p)


const p = new Promise((resolve,reject)=>{
    console.log("going to do the homework...")

    setTimeout(()=>{
        const done=true;   // if false then not done will be printed
        if(done){
            resolve("homework done")
        }
        else{
            reject("not done")
        }
    },3000)
})

p.then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
})