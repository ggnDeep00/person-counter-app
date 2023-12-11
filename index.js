// document.getElementById("count-el").innerText=7

let count=0
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")

function increment(){
    count=count+1
    // console.log("The button was clicked")
    countEl.textContent=count
}
let dummyCount=0
function save(){
    dummyCount+=count
    let countStr = dummyCount + " -  "
    count=0
    saveEl.textContent+=countStr
    countEl.textContent=count

    // saveEl.innerContent+=countStr
}


