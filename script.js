let notes = JSON.parse(localStorage.getItem("studypilot_notes")) || [];
let flashcards = JSON.parse(localStorage.getItem("studypilot_flashcards")) || [];
let quizzes = JSON.parse(localStorage.getItem("studypilot_quizzes")) || [];

function updateStorage() {
  localStorage.setItem("studypilot_notes", JSON.stringify(notes));
  localStorage.setItem("studypilot_flashcards", JSON.stringify(flashcards));
  localStorage.setItem("studypilot_quizzes", JSON.stringify(quizzes));
}

function renderNotes() {
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "saved-item";
    div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function renderFlashcards() {
  const list = document.getElementById("flashcardsList");
  list.innerHTML = "";

  flashcards.forEach((card, index) => {
    const div = document.createElement("div");
    div.className = "saved-item";
    div.innerHTML = `
      <p><strong>${card.front}</strong><br>${card.back}</p>
      <button onclick="deleteFlashcard(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function renderQuizzes() {
  const list = document.getElementById("quizList");
  list.innerHTML = "";

  quizzes.forEach((quiz, index) => {
    const div = document.createElement("div");
    div.className = "saved-item";
    div.innerHTML = `
      <p>${quiz.question}</p>
      <button onclick="alert('Answer: ${quiz.answer.replace(/'/g, "\\'")}')">Show Answer</button>
      <button onclick="deleteQuiz(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

function saveNotes() {
  const notesInput = document.getElementById("notesInput");
  const value = notesInput.value.trim();

  if (value === "") {
    alert("Please write some notes first.");
    return;
  }

  notes.push(value);
  updateStorage();
  renderNotes();
  notesInput.value = "";
}

function addFlashcard() {
  const front = document.getElementById("flashFront").value.trim();
  const back = document.getElementById("flashBack").value.trim();

  if (front === "" || back === "") {
    alert("Please complete both sides of the flashcard.");
    return;
  }

  flashcards.push({ front, back });
  updateStorage();
  renderFlashcards();

  document.getElementById("flashFront").value = "";
  document.getElementById("flashBack").value = "";
}

function addQuiz() {
  const question = document.getElementById("quizQuestion").value.trim();
  const answer = document.getElementById("quizAnswer").value.trim();

  if (question === "" || answer === "") {
    alert("Please enter both a question and an answer.");
    return;
  }

  quizzes.push({ question, answer });
  updateStorage();
  renderQuizzes();

  document.getElementById("quizQuestion").value = "";
  document.getElementById("quizAnswer").value = "";
}

function deleteNote(index) {
  notes.splice(index, 1);
  updateStorage();
  renderNotes();
}

function deleteFlashcard(index) {
  flashcards.splice(index, 1);
  updateStorage();
  renderFlashcards();
}

function deleteQuiz(index) {
  quizzes.splice(index, 1);
  updateStorage();
  renderQuizzes();
}

renderNotes();
renderFlashcards();
renderQuizzes();