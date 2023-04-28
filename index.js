const stored = localStorage.getItem('storedBooks');
let books = JSON.parse(stored) || [];
const form = document.querySelector('.form');
const booksDisplayed = document.querySelector('.books_displayed');
let filtering;

// display books

const showBooks = () => {
  booksDisplayed.innerHTML = '';
  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<br/><h1>${book.title}</h2> <br/> <br/> <h3>${book.author}</h3> <br/>`;
    const deletingBtn = document.createElement('button');
    deletingBtn.addEventListener('click', () => { filtering(book); });
    deletingBtn.textContent = 'Remove';
    deletingBtn.classList.add('remove');
    booksDisplayed.appendChild(listItem);
    booksDisplayed.appendChild(deletingBtn);
  });
};
showBooks();

// adding new book
const addBook = () => {
  const addedBook = {
    title: form.title.value,
    author: form.author.value,
    id: Math.floor(Math.random() * 88),
  };
  books.push(addedBook);
  localStorage.setItem('storedBooks', JSON.stringify(books));
  showBooks();
};

// form eventListener to add book on submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook();
  form.title.value = '';
  form.author.value = '';
});

// deleting a book

filtering = (book) => {
  books = books.filter((id) => id !== book);
  localStorage.setItem('storedBooks', JSON.stringify(books));
  showBooks();
};
