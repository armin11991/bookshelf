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
  
  let book = document.querySelector('#book_title').value;
  let div = document.createElement("div");
  let li = document.createElement("li");
  let deleteBttn = document.createElement("button");
  let readBttn = document.createElement("button");

  div.setAttribute('id', myBooks2022.indexOf(book));
  div.classList.add("book-container");
  li.innerText = book;
  bookshelf.appendChild(div);
  div.appendChild(li)
  div.appendChild(deleteBttn)
  div.appendChild(readBttn)

  deleteBttn.innerText = "borrar";
  readBttn.innerText = "leído";
  readBttn.classList.add("pendiente");

  deleteBttn.addEventListener('click', () => {
    myBooks2022.splice(myBooks2022.indexOf(book),1);
    bookshelf.replaceChildren();
    bookRender();
  })

  readBttn.addEventListener('click', () => {
    readBttn.classList.remove("pendiente");
    readBttn.classList.add("terminado");
  })

  readBttn.addEventListener('dblclik', () => {
    readBttn.classList.remove("terminado");
    readBttn.classList.add("pendiente");
  })

  myBooks2022.push(book)

  form.classList.remove('show-form');
});

function bookRender() {
  myBooks2022.forEach((book) => {

    let div = document.createElement("div");
    let li = document.createElement("li");
    let deleteBttn = document.createElement("button");
    let readBttn = document.createElement("button");
  
    div.setAttribute('id', myBooks2022.indexOf(book));
    div.classList.add("book-container");
    deleteBttn.innerText = "borrar";
    readBttn.innerText = "leído";
    li.innerText = book;
    readBttn.classList.add("pendiente");
  
    bookshelf.appendChild(div);
    div.appendChild(li)
    div.appendChild(deleteBttn)
    div.appendChild(readBttn)
  
    deleteBttn.addEventListener('click', () => {
      myBooks2022.splice(myBooks2022.indexOf(book),1);
      bookshelf.replaceChildren();
      bookRender();
    })

    readBttn.addEventListener('click', () => {
      readBttn.classList.remove("pendiente");
      readBttn.classList.add("terminado");
    })

    readBttn.addEventListener('dblclik', () => {
      readBttn.classList.remove("terminado");
      readBttn.classList.add("pendiente");
    })
  
  });
};

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

function showArray(myBooks2022) {
  let i = 0;

  while (i < myBooks2022.length) {
    console.log(myBooks2022[i]);
    i++;
  }
}

bookRender();