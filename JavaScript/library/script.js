class Book {
    #id;

    constructor(title, author, pages, hasRead) {
        this.#id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }
    
    get id() {
        return this.#id;
    }

    toggleReadStatus() {
        this.hasRead = !this.hasRead;
    };
}

class Library {
    #books = [];

    constructor () {
        this.libraryElement = document.getElementById("library");
        this.initialize();
    }

    initialize () {
        this.#addTestBooks();
        this.render();
        this.setupEventListeners();
    }

    #addTestBooks() {
        this.addBook("The Hobbit", "J.R.R. Tolkien", 295, true);
        this.addBook("Dune", "Frank Herbert", 412, false);
        this.addBook("Atomic Habits", "James Clear", 320, true);
        this.addBook("Project Hail Mary", "Andy Weir", 476, false);
    }

    #validateBook(book) {
        return book.title && book.author && book.pages > 0;
    }

    addBook(title, author, pages, hasRead) {
        const book = new Book(title, author, pages, hasRead);
        if (!this.#validateBook(book)) {
            throw new Error("Invalid book data");
        }
        this.#books.push(book);
        this.refreshBookCard(book);
        return book;
    }

    removeBook(bookId) {
        const index = this.#books.findIndex(book => book.id === bookId);
        if (index !== -1) {
            this.#books.splice(index, 1);
            const card = this.libraryElement.querySelector(`.book-card[data-id="${bookId}"]`);
            card.remove();
        }
    }

    getBook(bookId) {
        return this.#books.find(book => book.id === bookId);
    }

    get books() {
        return [...this.#books];
    }

    createBookCard(book) {
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

    refreshBookCard(book) {
        const existingCard = this.libraryElement.querySelector(`.book-card[data-id="${book.id}"]`);
        if (existingCard) {
            const newCard = this.createBookCard(book);
            existingCard.replaceWith(newCard);
        }
        else {
            this.libraryElement.appendChild(this.createBookCard(book));
        }
    }

    render() {
        this.libraryElement.innerHTML = "";
        this.#books.forEach(book => {
            this.libraryElement.appendChild(this.createBookCard(book));
        });
    }

    setupEventListeners() {
        this.libraryElement.addEventListener("click", (event) => {
            const card = event.target.closest(".book-card");
            if (!card) return;

            const bookId = card.getAttribute("data-id");
            const book = this.getBook(bookId);
            if (!book) return;

            if (event.target.classList.contains("toggle")) {
                this.handleToggleReadStatus(book, card);
            }  
            else if (event.target.classList.contains("delete")) {
                this.handleDeleteBook(book);
            }
        });
   
    }

    handleToggleReadStatus(book, card) {
        book.toggleReadStatus();
        const statusText = card.querySelector(".status .status-text");
        const statusIcon = card.querySelector(".status .icon");

        statusText.textContent = book.hasRead ? "Read" : "Not Read";
        statusIcon.classList.toggle("fa-toggle-on", book.hasRead);
        statusIcon.classList.toggle("fa-toggle-off", !book.hasRead);
        card.querySelector(".status").classList.toggle("read", book.hasRead);
        card.querySelector(".status").classList.toggle("unread", !book.hasRead);
        this.render(book.id);
    }

    handleDeleteBook(book) {
        if (confirm(`Are you sure you want to delete "${book.title}" by ${book.author}?`)) {
            this.removeBook(book.id);
        }
    }

}

class BookForm {
    constructor(library) {
        this.library = library;
        this.dialog = document.getElementById("book-dialog");
        this.form = document.getElementById("add-book-form");
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById("add-button").addEventListener("click", () => {
            this.dialog.showModal();
        });

        document.getElementById("submit-book").addEventListener("click", (event) => {
            this.handleSubmit(event);
        });

        document.getElementById("cancel-book").addEventListener("click", (event) => {
            this.form.reset();
            this.dialog.close();
        }); 
    }

    handleSubmit(event) {
        event.preventDefault();

            const title = document.getElementById("title").value.trim();
            const author = document.getElementById("author").value.trim();
            const pages = parseInt(document.getElementById("pages").value, 10);
            const hasRead = document.querySelector("input[name='read-status']:checked");

            if (!this.validateInputs(title, author, pages, hasRead)) {
                return;
            }

            this.library.addBook(title, author, pages, hasRead.value === "read");
            this.form.reset();
            this.dialog.close();

    }

    validateInputs(title, author, pages, hasRead) {
            if (!title) {
                alert("Please enter a title for the book.");
                return false;
            }
            if (!author) {
                alert("Please enter an author for the book.");
                return false;
            }
            if (isNaN(pages) || pages <= 0) {
                alert("Please enter a valid number of pages.");
                return false;
            }
            if (!hasRead) {
                alert("Please select whether you have read the book or not.");
                return false;
            }
            return true;
    }
    
}

// Initialize the application
const library = new Library();
const bookForm = new BookForm(library);

