const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let editToDo = null;

const addToDo = () => {
  const inputText= inputBox.value.trim();
  if(inputText.length<=0){
    alert("write something")
  }
  if (addBtn.value === "Edit") {
    editToDo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    //creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    //creating edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    //creating delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";
  }

  
};

const updateToDo =(e)=>{
  // console.log(e.target);

  if(e.target.innerHTML==="Remove"){
    todoList.removeChild(e.target.parentElement)
  }

  if(e.target.innerHTML==="Edit"){
    inputBox.value=e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value= "Edit"
    editToDo = e;
   
  }

}

addBtn.addEventListener('click',addToDo);
todoList.addEventListener("click", updateToDo);


