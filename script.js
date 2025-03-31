const myLibrary = [];

// const bookOne = {
//   id: crypto.randomUUID(),
//   title: "power of habit",
//   author: "charles",
//   pages: 200,
// };

// const bookTwo = {
//   id: crypto.randomUUID(),
//   title: "test",
//   author: "test",
//   pages: 1223,
// };

// myLibrary.push(bookOne);
// myLibrary.push(bookTwo);

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
 * Creates new instance for the Book Constructor
 * Push the created instance into the myLibrary array
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

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add-book-btn");
addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

const form = document.querySelector("form");

const cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.addEventListener("click", (e) => {
  dialog.close();
});

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

  display();
  cancelBtn.click();
});

/**
 * Display the book objects stored in the myLibrary array
 * @returns {void}
 */
const bookContainer = document.querySelector(".book-container");
function display() {
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let titleParagraph = document.createElement("p");
    let authorParagraph = document.createElement("p");
    let pagesParagraph = document.createElement("p");
    let hasReadParagraph = document.createElement("p");

    let titleTextNode = document.createTextNode(myLibrary[i].title);
    let authorTextNode = document.createTextNode(myLibrary[i].author);
    let pagesTextNode = document.createTextNode(myLibrary[i].pages);
    let hasReadTextNode = document.createTextNode(myLibrary[i].hasRead);

    titleParagraph.appendChild(titleTextNode);
    authorParagraph.appendChild(authorTextNode);
    pagesParagraph.appendChild(pagesTextNode);
    hasReadParagraph.appendChild(hasReadTextNode);

    bookCard.appendChild(titleParagraph);
    bookCard.appendChild(authorParagraph);
    bookCard.appendChild(pagesParagraph);
    bookCard.appendChild(hasReadParagraph);

    bookContainer.appendChild(bookCard);
  }
}

display();
