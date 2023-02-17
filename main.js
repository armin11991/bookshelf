// array to store the books
let myBooks2022 = ["a viagem do elefante","o alquimista","graduation day","onze minutos"];

let bookshelf = document.getElementById("bookshelf");
let openForm = document.querySelector('.new-book-bttn');
let form = document.querySelector('.form-container');
let closeForm = document.querySelector('.cancel-bttn');
let addBook = document.querySelector('.add-bttn');

openForm.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.add('show-form');
});

closeForm.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.remove('show-form');
});

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  
  let bookTitle = document.querySelector('#book_title').value;

  let li = document.createElement("li");
  li.innerText = bookTitle;
  bookshelf.appendChild(li);

  form.classList.remove('show-form');
});


myBooks2022.forEach((book) => {
  let li = document.createElement("li");
  li.innerText = book;
  bookshelf.appendChild(li);
});

// constructor
function Book (title, author, read, language) {
    this.title = title,
    this.author = author,
    this.read = read,
    this.language = language,
    this.info = function() {
        console.log(title, "by " + author + ",", pages + " pages,", "and is written in " + language, read)
    }
}

function addBookToLibrary () {
  // do stuff here
}

// mostrar el array en la consola
/*
let i = 0;

while (i < myBooks2022.length) {
  console.log(myLibrary2022[i]);
  i++;
}
*/