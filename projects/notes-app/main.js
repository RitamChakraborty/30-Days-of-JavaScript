function $(selector) {
    return document.querySelector(selector);
}

const addNodeBtn = $('#add-note-btn');
const notesElm = $('#notes');

window.addEventListener('load', onLoad);

function onLoad() {
    const notes = getNotesFromLocalStorage();

    for(const note of notes) {
        const noteElm = createNoteElm(note);
        notesElm.appendChild(noteElm);
    }
}

addNodeBtn.addEventListener('click', handleAddNodeBtnClick);

function handleAddNodeBtnClick() {
    const newNoteId = btoa(+Math.random());
    const newNoteElm = createNoteElm(newNoteId);
    const newNote = {id: newNoteId, note: ''};
    saveNoteToLocalStorage(newNote);
    notesElm.insertBefore(newNoteElm, notesElm.firstChild);
}

function createNoteElm(note) {
    const noteElm = document.createElement('article');
    noteElm.id = note.id;
    const textarea = document.createElement('textarea');
    textarea.textContent = note.note;
    const deleteNoteBtn = document.createElement('button');
    deleteNoteBtn.innerHTML = `<span class="material-icons">delete</span>`;
    noteElm.append(textarea, deleteNoteBtn);
    return noteElm;
}

function getNotesFromLocalStorage() {
    let notesString = localStorage.getItem('notes');
    if (!notesString) return [];
    return JSON.parse(notesString);
}

function saveNoteToLocalStorage(note) {
    let notes = [];
    let notesString = localStorage.getItem('notes');
    if (notesString) note = JSON.parse(notesString);
    notes = [note, ...notes];
    localStorage.setItem('notes', JSON.stringify(notes));
}