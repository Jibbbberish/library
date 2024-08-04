const grid = document.querySelector(".grid");
console.log(grid);
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
        grid.appendChild(info);
        info.textContent = `${library[i].title} by ${library[i].author}, 
        ${library[i].pages}, ${library[i].read}`;
    }
}

