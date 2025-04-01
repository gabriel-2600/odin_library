const myLibrary = [];

/**
 * Function Constructor
 * @constructor
 * @param {string} id
 * @param {string} title
 * @param {string} author
 * @param {number} pages
 * @param {boolean} hasRead
 */
function Book(id, title, author, pages, hasRead) {
  if (!new.target) {
    throw Error("Use the new keyword to create an instance");
  }

  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

/**
 * Creates a new object for the Book Constructor
 * Push the created object into the myLibrary array
 * @param {string} id
 * @param {string} title
 * @param {string} author
 * @param {number} pages
 * @param {boolean} hasRead
 * @returns {void}
 * */
function addBookToLibrary(id, title, author, pages, hasRead) {
  let book = new Book(id, title, author, pages, hasRead);

  myLibrary.push(book);
}

/**
 * Buttons to show/close the form modal
 */
const dialog = document.querySelector("dialog");

const addBookBtn = document.querySelector(".add-book-btn");
addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

const cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.addEventListener("click", (e) => {
  dialog.close();
});

/**
 * Submit button in form modal
 * */
const form = document.querySelector("form");

const titleInputField = document.querySelector("#title");
const authorInputField = document.querySelector("#author");
const pagesInputField = document.querySelector("#pages");
const hasReadInputField = document.querySelector("#has-read");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let setID = crypto.randomUUID();
  addBookToLibrary(
    setID,
    titleInputField.value,
    authorInputField.value,
    pagesInputField.value,
    hasReadInputField.checked
  );

  display(createBookCardDiv());

  cancelBtn.click();
});

/**
 * Create a book-card div for the latest element in myLibrary array
 * @returns {HTMLDivElement}
 * */
function createBookCardDiv() {
  let bookCard = document.createElement("div");
  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-id", myLibrary[i].id);

    let titleParagraph = document.createElement("h3");
    let authorParagraph = document.createElement("p");
    let pagesParagraph = document.createElement("p");

    titleParagraph.textContent = `"${myLibrary[i].title}"`;
    authorParagraph.textContent = `${myLibrary[i].author}`;
    pagesParagraph.textContent = `${myLibrary[i].pages}`;

    let hasReadToggleBtn = document.createElement("button");
    hasReadToggleBtn.classList.add("read-toggle-btn");
    if (myLibrary[i].hasRead) {
      hasReadToggleBtn.textContent = "Read";
    } else {
      hasReadToggleBtn.textContent = "Not Read";
    }

    let removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("remove-book-btn");
    removeBookBtn.textContent = "X";

    bookCard.appendChild(titleParagraph);
    bookCard.appendChild(authorParagraph);
    bookCard.appendChild(pagesParagraph);
    bookCard.appendChild(hasReadToggleBtn);
    bookCard.appendChild(removeBookBtn);
  }

  return bookCard;
}

/**
 * Appends the bookCard div to the bookContainer
 * @param {HTMLDivElement} bookcard
 * @returns {void}
 */
const bookContainer = document.querySelector(".book-container");
function display(bookCard) {
  bookContainer.appendChild(bookCard);
}

bookContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-book-btn")) {
    let targetDiv = e.target.parentElement;
    let targetID = targetDiv.dataset.id;

    for (let i = 0; i < myLibrary.length; i++) {
      if (targetID === myLibrary[i].id) {
        myLibrary.splice(i, 1);
        targetDiv.remove();
      }
    }
  }
});
