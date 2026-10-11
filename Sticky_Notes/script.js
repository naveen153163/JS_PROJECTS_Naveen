
let noteInput = document.getElementById("noteInput");
let addNoteBtn = document.getElementById("addNoteBtn");
let notesContainer = document.getElementById("notesContainer");

function addNote() {
  let noteText = noteInput.value;

  // Do not add an empty note
  if (noteText.trim() === "") {
    return;
  }

  // Create a new note
  let note = document.createElement("div");
  note.classList.add("note");

  // Add the text to the note
  note.textContent = noteText;

  // Create the delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  // Delete this note when X is clicked
  deleteBtn.addEventListener("click", function() {
    note.remove();
  });

  // Add the X button inside the note
  note.appendChild(deleteBtn);

  // Display the note
  notesContainer.appendChild(note);

  // Clear the textarea
  noteInput.value = "";
}

// Add a note when the + button is clicked
addNoteBtn.addEventListener("click", function() {
  addNote();
});
