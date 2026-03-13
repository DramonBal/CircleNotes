const notesContainer = document.querySelector(".notes-container");
const createNoteBtn = document.getElementById("create-note-btn");


createNoteBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("style", `transform: rotate(${Math.random() * 4 - 2}deg);`); // Random rotation
    
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "delete3.png"; // You will need a delete icon image
    deleteIcon.className = "delete-icon";

    notesContainer.appendChild(inputBox);
    inputBox.appendChild(deleteIcon);

    // Add functionality to delete the note when the icon is clicked
    deleteIcon.addEventListener("click", () => {
        notesContainer.removeChild(inputBox);
    });
});

