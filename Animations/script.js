

var quill = new Quill('#editor', {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'  // or 'bubble'
});

function updateQuillEditor(){

  const notes = localStorage.getItem('alok_note');
  if(notes){
    console.log("Notes---",JSON.parse(notes))
  }
  quill.setContents(JSON.parse(notes))
}

updateQuillEditor();

const saveCurrentNoteButton = document.getElementById('save');
saveCurrentNoteButton.addEventListener('click',function(){

  const data = quill.getContents();
  console.log('Data---',data)

  localStorage.setItem('alok_note',JSON.stringify(data))
})


function handleDragStart(e) {
  this.style.opacity = "0.4";

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
  this.style.opacity = "1";
    items.forEach(function (item) {
      item.classList.remove("over");
    });
}

function handleDragOver(e) {
  e.preventDefault();
  return false;
}

function handleDragEnter(e) {
  console.log("enter",this);
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}
function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
    
      return false;
  }

let items = document.querySelectorAll(".notes-item");

items.forEach(function (item) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragover", handleDragOver);
  item.addEventListener("dragenter", handleDragEnter);
  item.addEventListener("dragleave", handleDragLeave);
  item.addEventListener('drop', handleDrop);

  item.addEventListener("dragend", handleDragEnd);
});
