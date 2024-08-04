const grid = document.querySelector(".grid");
const btn = document.querySelector("#book");
const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("select");
let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayBooks() {
    for (let i=0; i<library.length; i++) {
        let info = document.createElement("p");
        info.style.cssText = "background: white; border: solid white; border-radius: 8px;"
        info.textContent = `${library[i].title} by ${library[i].author}, 
        ${library[i].pages}, ${library[i].read}`;
        grid.appendChild(info);
    }
}

btn.onclick = () => {
    form.showModal();
}

submit.onclick=() => {
    event.preventDefault();
    let newBook = new Book(title.value, author.value, pages.value, read.value);
    addBookToLibrary(newBook);
    displayBooks();
    HTMLDialogElement.close();
}