const myLibrary = [];
const libraryElement = document.getElementById("library");
const addButton = document.getElementById("add-button");

function Book (title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'read' : 'not read yet'}`;
    }
}

function addBookToLibrary(title, author, pages, hasRead) {
    const book = new Book(title, author, pages, hasRead);
    myLibrary.push(book);
}

function displayBooks() {
    libraryElement.innerHTML = "";
    myLibrary.forEach(book => {
        libraryElement.innerHTML += `
            <div class="book-card">
                <h3 class="title">${book.title}</h3>
                <p class="author"> Author: ${book.author}</p>
                <p class="pages">Pages: ${book.pages}</p>
                <div class="status ${book.hasRead ? 'read' : 'unread'}">${book.hasRead ? "Read" : "Not Read"}</div>
                <button class="toggle-read-button"><i class="fa-solid fa-toggle-${book.hasRead ? "on" : "off"}"></i></button>
                <button class="remove-button"><i class="fa-solid fa-trash"></i></button>
            </div>
        `
    })
}

const addBookForm = () => {
    
}

// Add test books to the library
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Project Hail Mary", "Andy Weir", 476, false);

// Display all books
displayBooks();

addButton.addEventListener("click", (event) => {
    preventDefault();
    addBookForm();
});