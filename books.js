let library = [];

class Book {
    constructor(title, author, pages, read, displayed) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.displayed = displayed;
    }

    createBookCard(index) {
        const bookCard = document.createElement("section");
        bookCard.className = "book";
        bookCard.dataset.position = index;

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
        removeButton.addEventListener('click', () => {
            removeBookFromLibrary(bookCard.dataset.position);
        });

        const readToggler = document.createElement("button");
        readToggler.className = "done-reading";
        if (this.read) {
            readToggler.classList.toggle("toggled");
            readToggler.textContent = "Read";
        } else {
            readToggler.textContent = "Not Read";
        }
        readToggler.addEventListener('click', () => {
            toggleDoneReadingButton(readToggler);
            this.read = !this.read;
        });

        bookCard.append(title, author, pages, readToggler, removeButton);
        return bookCard;
    }
}

function removeBookFromLibrary(index) {
    const bookDisplay = document.querySelector(".books");

    bookDisplay.removeChild(bookDisplay.children[index]);
    library.splice(index, 1);

    let counter = 0;
    for (const child of bookDisplay.children) {
        child.dataset.position = counter++;
    }
    displayBooks();
}

function toggleDoneReadingButton(readToggler) {
    if (readToggler.className == "done-reading") {
        readToggler.textContent = "Read";
    } else {
        readToggler.textContent = "Not Read";
    }
    readToggler.classList.toggle("toggled");
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayBooks() {
    const bookDisplay = document.querySelector(".books");
    for (let i = 0; i < library.length; ++i) {
        if (library[i].displayed === false) {
            bookDisplay.appendChild(library[i].createBookCard(i));
            library[i].displayed = true;
        }
    }
}

function setButtons() {
    const addBookButton = document.querySelector(".add");
    const formContainer = document.querySelector(".form-container");
    const form = document.querySelector("form");
    addBookButton.addEventListener('click', () => {
        formContainer.style.visibility = "visible";
        setFormDefaultValues();
    });
    formContainer.addEventListener('click', (e) => {
        if (e.target.className == "form-container") {
            formContainer.style.visibility = "hidden";
        }
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newBook = new Book(form.title.value, form.author.value, form.pages.value, form.done_reading.checked, false);
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
