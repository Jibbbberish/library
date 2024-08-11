const grid = document.querySelector(".grid");
const btn = document.querySelector("#book");
const dialog = document.querySelector("#dialog");
const submit = document.querySelector("#submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("select");
const form = document.querySelector("#form");
let library = [];

class Book {
    constructor(title, author, pages, read, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayBooks(i) {
    let book = document.createElement("div");
    let info = document.createElement("p");
    let remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.onclick=() => {
        book.remove();
    }
    book.appendChild(remove);
    book.classList.add("card");
    info.classList.add("card");
    book.style.cssText = "background: white; border: solid white; border-radius: 8px;"
    book.appendChild(info);
    info.textContent = `${library[i].title} by ${library[i].author}, 
    ${library[i].pages} pages long, read: ${library[i].read}`;
    grid.appendChild(book);
}

btn.onclick = () => {
    dialog.showModal();
}

submit.onclick=() => {
    event.preventDefault();
    let newBook = new Book(title.value, author.value, pages.value, read.value, library.length);
    addBookToLibrary(newBook);
    displayBooks(library.length - 1);
    form.reset();
    dialog.close();
}