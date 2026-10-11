
let noteInput = document.getElementById("noteInput");
let addNoteBtn = document.getElementById("addNoteBtn");
let notesContainer = document.getElementById("notesContainer");

function addNote() {
  let noteText = noteInput.value;

  if (noteText.trim() === "") {
    return;
  }

  let note = document.createElement("div");
  note.classList.add("note");

  note.textContent = noteText;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function() {
    note.remove();
  });

  note.appendChild(deleteBtn);

  notesContainer.appendChild(note);

  noteInput.value = "";
}

addNoteBtn.addEventListener("click", function() {
  addNote();
});
