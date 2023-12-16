const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box")

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    
    const img = document.createElement("img");
    img.src = "images/delete.png";
    img.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        updateStorage();
    });

    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);
});
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName ==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
            
        });
    }  
}) 

document.addEventListener("keydown", event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})