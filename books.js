let library = [];

function Book(title, author, pages, read, displayed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.displayed = displayed;
}

Book.prototype.createBookCard = function() {
    const bookCard = document.createElement("section");
    bookCard.className = "book";

    const title = document.createElement("p");
    title.textContent = this.title;
    title.className = "title";

    const author = document.createElement("p");
    author.textContent = this.author;
    author.className = "author";

    const pages = document.createElement("p");
    pages.className = "pages";
    pages.textContent = `${this.pages} pages`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"
    removeButton.className = "remove";

    const readToggler = document.createElement("button");
    readToggler.textContent = "not read";
    readToggler.className = "done-reading";

    bookCard.append(title, author, pages, readToggler, removeButton);
    return bookCard;
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayBooks() {
    const bookDisplay = document.querySelector(".books");
    for (const book of library) {
        if (book.displayed === false) {
            bookDisplay.appendChild(book.createBookCard());
            book.displayed = true;
        }
    }
}

function setButtons() {
    const addBookButton = document.querySelector(".add");
    const formContainer = document.querySelector(".form-container");
    const submitButton = document.querySelector(".submit");
    addBookButton.addEventListener('click', () => {
        formContainer.style.visibility = "visible";
        setFormDefaultValues();
    });
    formContainer.addEventListener('click', (e) => {
        if (e.target.className == "form-container") {
            formContainer.style.visibility = "hidden";
        }
    });
    submitButton.addEventListener('click', () => {
        const form = document.querySelector("form");
        const newBook = new Book(form.title.value, form.author.value, form.pages.value, form.done_reading.value, false);
        addBookToLibrary(newBook);
        displayBooks();
        formContainer.style.visibility = "hidden";
    });
}

function setFormDefaultValues() {
    const form = document.querySelector("form");
    form.author.value = "";
    form.title.value = "";
    form.pages.value = "";
    form.done_reading.checked = false;
}

setButtons();

const book1 = new Book("Harry Potter and The Sorceror's Stone", "J.K Rowling", 295, false, false);
library.push(book1);
displayBooks();
