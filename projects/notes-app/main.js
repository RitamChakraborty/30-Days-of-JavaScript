function $(selector) {
    return document.querySelector(selector);
}

const addNodeBtn = $('#add-note-btn');
const notesElm = $('#notes');

addNodeBtn.addEventListener('click', handleAddNodeBtnClick);

function handleAddNodeBtnClick() {
    const newNoteElm = createNoteElm();
    notesElm.insertBefore(newNoteElm, notesElm.firstChild);
}

function createNoteElm() {
    const noteElm = document.createElement('article');
    const textarea = document.createElement('textarea');
    const deleteNoteBtn = document.createElement('button');
    deleteNoteBtn.innerHTML = `<span class="material-icons">delete</span>`;
    noteElm.append(textarea, deleteNoteBtn);
    return noteElm;
}