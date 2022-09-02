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

const book1 = new Book("Harry Potter and The Sorceror's Stone", "J.K Rowling", 295, false, false);
library.push(book1);
console.log(library[0]);
displayBooks();
