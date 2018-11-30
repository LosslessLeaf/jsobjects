var library = {
    bookList: [],
    checkedBooks: [],
    newBook: function Book(bookNo, title, author, pubdate, brief, genre) {
        this.bookNo = bookNo;
        this.title = title;
        this.author = author;
        this.pubdate = pubdate;
        this.brief = brief;
        this.genre = genre;
        library.bookList.push(this);
    },
    listBooks: function list() {
        for(let i = 0; i < this.bookList.length; i++) {
            console.log(this.bookList[i].title);
        }
    },
    checkoutBook: function checkout(book) {
        for(let i = 0; i < this.bookList.length; i++) {
            if(this.bookList[i].title === book) {
            console.log("Good choice!", "You have chosen", this.bookList[i].title, "by", this.bookList[i].author);
            this.checkedBooks.push(this.bookList[i]);
            this.bookList.splice(i, 1);
            }
        }
        console.log(this.checkedBooks);
    }
    
};


var harryPotter = new library.newBook(0001, "Harry Potter", "J. K. Rowling", 1995, "You're a wizard, Harry", "Fantasy");
var theBible = new library.newBook(0002, "The Holy Bible", "Some One", 0001, "Jesus loves you", "Fiction");
var hungerGames = new library.newBook(0003, "The Hunger Games", "Suzanne Collins", 2008, "I volunteer as tribute", "Sci-Fi");
var twilight = new library.newBook(0004, "Twilight", "Someone Else", 2006, "Sparkles the Vampire", "Romamady");
