const task = document.querySelector(".input-text");
var content= document.querySelector("ul");

function addtask(){
  if(task.value=='')
  {
    alert("")
  }
  else
  {
    let li =document.createElement("li");
    li.innerHTML=task.value
    content.appendChild(li);
    let span =document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  task.value = "";
  saveData();
}
content.addEventListener("click",function(elem){
  if(elem.target.tagName=="LI"){
    elem.target.classList.toggle("check");
    saveData();
  }
  else if(elem.target.tagName =="SPAN"){
   elem.target.parentElement.remove();
   saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",content.innerHTML)
}
function showTask(){
  content.innerHTML=localStorage.getItem("data")
}
showTask();


