// array to store the books
let myBooks2022 = ["a viagem do elefante","o alquimista","graduation day","onze minutos"];

let bookshelf = document.getElementById("bookshelf");

myBooks2022.forEach((book) => {
  let li = document.createElement("li");
  li.innerText = book;
  bookshelf.appendChild(li);
});

// constructor
function Book (title, author, pages, read, language) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.language = language,
    this.info = function() {
        console.log(title, "by " + author + ",", pages + " pages,", "and is written in " + language, read)
    }
}

function addBookToLibrary () {
  // do stuff here
}

/*
function showBooks () {
  // opción para mostrar el array en la consola
  /*
  let i = 0;

  while (i < myBooks2022.length) {
    console.log(myLibrary2022[i]);
    i++;
  }

  // option 2
  let books = ""; // creo la variable donde se agruparán los libros
  let i = 0; // inicializo en cero mi variable i

  while (i < myBooks2022.length) { //recorro mi array mediante un bucle while
    myBooks2022.push[String]; //extarigo cada uno de los elementos de mi array
    myBooks2022.forEach(function(item) { // defino la función que creará un elemento de mi lista de cada elemento de mi array
      books += '<li>' + item + '</li>' // creo el objeto de la lista en formato html
    });
  }

  document.getElementById("shelf").innerHTML = '<ol>' + books + '</ol>'
}*/
 
//showBooks(myBooks2022);