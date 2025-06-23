const myLibrary = [];
const libraryElement = document.getElementById("library");
const addButton = document.getElementById("add-button");
const toggleButtons = document.getElementsByClassName("toggle");
const deleteButtons = document.getElementsByClassName("delete");
const bookDialog = document.getElementById("book-dialog");
const cancelDialogButton = document.getElementById("cancel-book");


class Book {

    constructor(title, author, pages, hasRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }
    
    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'read' : 'not read yet'}`;
    };

    toggleReadStatus() {
        this.hasRead = !this.hasRead;
    };
}

function addBookToLibrary(title, author, pages, hasRead) {
    const book = new Book(title, author, pages, hasRead);
    myLibrary.push(book);
    displayBook(book);
}

function createBookCard(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-id", book.id);
    bookCard.innerHTML = `
        <h3 class="title">${book.title}</h3>
        <p class="author"> Author: ${book.author}</p>
        <p class="pages">Pages: ${book.pages}</p>
        <div class="status ${book.hasRead ? 'read' : 'unread'}">
            <span class="status-text">${book.hasRead ? "Read" : "Not Read"}</span>
            <i class="fa-solid fa-toggle-${book.hasRead ? "on" : "off"} toggle icon"></i>
        </div>
        <i class="fa-solid fa-trash delete icon"></i>
    `;
    return bookCard;
}

function displayBooks() {
    libraryElement.innerHTML = "";
    myLibrary.forEach(book => {
        displayBook(book);
    })
}

function displayBook(book) {
    libraryElement.appendChild(createBookCard(book));
}

// Add test books to the library
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Project Hail Mary", "Andy Weir", 476, false);

// Display all books
displayBooks();

libraryElement.addEventListener("click", (event) => {
    const card = event.target.closest(".book-card");
    if (!card) return;

    const book = myLibrary.find(book => book.id === card.getAttribute("data-id"));
    if (!book) return;

    if (event.target.classList.contains("toggle")) {
        book.toggleReadStatus();
        const statusText = card.querySelector(".status .status-text");
        const statusIcon = card.querySelector(".status .icon");

        statusText.textContent = book.hasRead ? "Read" : "Not Read";
        statusIcon.classList.toggle("fa-toggle-on", book.hasRead);
        statusIcon.classList.toggle("fa-toggle-off", !book.hasRead);
        card.querySelector(".status").classList.toggle("read", book.hasRead);
        card.querySelector(".status").classList.toggle("unread", !book.hasRead);
        
    }  
    else if (event.target.classList.contains("delete")) {
        if (confirm(`Are you sure you want to delete "${book.title}" by ${book.author}?`)) {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            card.remove();
        }
    }
});

addButton.addEventListener("click", () => {
    bookDialog.showModal();
});


document.getElementById("submit-book").addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = parseInt(document.getElementById("pages").value, 10);
    const hasRead = document.querySelector("input[name='read-status']:checked");

    if (!title) {
        alert("Please enter a title for the book.");
        return;
    }
    if (!author) {
        alert("Please enter an author for the book.");
        return;
    }
    if (isNaN(pages) || pages <= 0) {
        alert("Please enter a valid number of pages.");
        return;
    }
    if (!hasRead) {
        alert("Please select whether you have read the book or not.");
        return;
    }

    addBookToLibrary(title, author, pages, hasRead.value === "read");
    bookDialog.close();
    document.getElementById("add-book-form").reset();

});

cancelDialogButton.addEventListener("click", (event) => {
    document.getElementById("add-book-form").reset();
    bookDialog.close();
});