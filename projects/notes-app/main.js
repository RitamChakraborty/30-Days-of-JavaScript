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
    textarea.addEventListener('focusout', handleNoteElmFocusOut);
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
    if (notesString) notes = JSON.parse(notesString);
    notes = [note, ...notes];
    localStorage.setItem('notes', JSON.stringify(notes));
}

function updateNoteInLocalStorage(note) {
    const notes = getNotesFromLocalStorage();
    const newData = [];

    for (const i of notes) {
        if (i.id === note.id) {
            i.note = note.note;
        }

        newData.push(i);
    }

    localStorage.setItem('notes', JSON.stringify(newData));
}

function handleNoteElmFocusOut(e) {
    const textarea = e.target.parentElement;
    const noteData = e.target.value;
    const noteId = textarea.id;
    const note = {'id': noteId, 'note': noteData };
    updateNoteInLocalStorage(note);
}