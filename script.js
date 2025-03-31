const myLibrary = [];

// const bookOne = {
//   id: crypto.randomUUID(),
//   title: "power of habit",
//   author: "charles",
//   pages: 200,
//   hasRead: false,
// };

// const bookTwo = {
//   id: crypto.randomUUID(),
//   title: "test",
//   author: "test",
//   pages: 1223,
//   hasRead: true,
// };

// myLibrary.push(bookOne);
// myLibrary.push(bookTwo);

function Book(id, title, author, pages, hasRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

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
