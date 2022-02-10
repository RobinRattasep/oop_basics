ui = new UI();
ls = new LS();

// event elements
// form submit events
const form = document.querySelector('form');
const booktitleInput = document.querySelector('#title');
const bookauthorInput = document.querySelector('#author')
const bookisbnInput = document.querySelector('#isbn')
const bookList = document.querySelector('tbody.table-list');

// page reload
document.addEventListener('DOMContentLoaded', getBooks);


//events
// form submit event
form.addEventListener('submit', addBook);

bookList.addEventListener('click', deleteBook);

function addBook(e) {
	// create a new object Task with input value
	const booktitle =  booktitleInput.value;
	const bookauthor =  bookauthorInput.value;
	const bookisbn =  bookisbnInput.value;
	
	let newbook = new book(booktitle, bookauthor, bookisbn);
	// add task value to the visual by UI object
	ui.addBook(newbook);
	// add task value to the LS by LS object
	ls.addBook(newbook);
	e.preventDefault();
}

function deleteBook(e){
	// get task name
	if (e.target.tagName === 'A'){
		let book = e.target.parentElement.firstChild;
	// delete task value from visual by UI object
	ui.deleteBook(book);
	// change task element content before deleting from LS
	book = book.parentElement.previousElementSibling.textContent;
	// delete task value from LS by Ls object
	ls.deleteBook(book);
	}
}

function getBooks(){
	// delete tasks from LS by this localStorage name
	books = ls.getData();
	// create task list by UI
	books.forEach(ui.getBooks.bind(books));
}