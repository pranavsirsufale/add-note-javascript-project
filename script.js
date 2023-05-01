const addButton = document.querySelector('#add');
const addNewNote = ( text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
 
    const htmalData = `<div class="operation">
    <button class="edit">edit</button>

     <button class="delete">Delete</button>
     </div>
      <p class="main ${text ? '' : "hidden"}"></p>
    <textarea class=" ${text ? "hidden" : ''}" id="texta"></textarea>`;

    note.insertAdjacentHTML('afterbegin' , htmalData);
    // note.innerHTML=htmalData;(also we use this method )


    // getting the references
    const editButton = note.querySelector('.edit');
    const delBotton = note.querySelector('.delete');
    const mainDiv = note.querySelector('p');
    const textarea = note.querySelector('textarea');
    

    // delete the note
    delBotton.addEventListener('click', () => {
        note.remove();
    } )

    textarea.value = text;
    mainDiv.innerHTML = text;
    
    


    // toggle using edit button.
    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
        
        
        
    });

    


    


    



    document.body.appendChild(note)
}

addButton.addEventListener('click',() => addNewNote() )
