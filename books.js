let library = [];

function Book(title, author, pages, read, displayed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.displayed = displayed;
    this.info = () => {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? "read" : "not read yet"}`
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayBooks() {
    const bookDisplay = document.querySelector(".books");
    for (const book of library) {
        if (book.displayed === false) {
            bookDisplay.appendChild();
        }
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(book1.info())