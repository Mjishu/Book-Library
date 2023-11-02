
//book Constructor
function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const myLibrary = [];
let newBook;


function addToLibrary(){
    var Title = document.getElementById("title").value
    var Author = document.getElementById("author").value
    var Pages = document.getElementById("pages").value
    var Status = document.getElementById("status").checked
    
    newBook = new Book(Title,Author,Pages,Status)
    myLibrary.push(newBook)
    form.reset()
    updateLibraryDisplay()
}

function updateLibraryDisplay(){
    var bookList = document.getElementById("bookList")
    bookList.innerHTML = " "

    for (let i=0;i<myLibrary.length; i++){
        const book = myLibrary[i]
        const bookInfo = document.createElement('p')
        bookInfo.textContent = "Title: " + book.title + " Author: " + book.author + " book.pages: " + book.pages + " status: " + (book.status ? 'Read':'Not Read')
        bookList.appendChild(bookInfo)
    }
}

var Button = document.getElementById("addBtn")
Button.addEventListener("click", addToLibrary)



//? Place holder for books
let LOTR = new Book("Lord of the Rings", "George R.R Martin", 156, "read")
myLibrary.push(LOTR)

let poppyWars = new Book("The Poppy Wars", "R.F Kuang", 450, "read") //*leave end empty if you want not read
myLibrary.push(poppyWars)

updateLibraryDisplay()