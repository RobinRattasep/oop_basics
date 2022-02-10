class book {
	constructor(title, author, isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn
	}
		addedToLS(){
			console.log("Title: " + this.title + ", Author: " + this.author + ", ISBN: " + this.isbn + " is added to LS");
	}
}