
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
        bookInfo.innerHTML= "Title: " + book.title + " <br> Author: " + book.author + " <br> Pages: " + book.pages + " <br>" + "<button id=statusButton_" + i + ">" + (book.status ? 'Read' : 'Not Read') + "</button>" +' <br><button id=delBtn_' + i + '>Delete</button>'
        bookList.appendChild(bookInfo)

        let statusButton = document.getElementById("statusButton_" + i)

        statusButton.addEventListener("click", () => {
                console.log(i)
                // console.table(myLibrary)
                statusToggler(book,statusButton);
            })  

        var delBtn = document.getElementById("delBtn_" + i);
        delBtn.addEventListener("click", () => {
            myLibrary.splice(i,1)
            updateLibraryDisplay()

        console.log(bookInfo)     
})
    }
}

//* The return function was the issue...
function statusToggler(book, statusButton){
    book.status = !book.status;
    console.table(myLibrary)
    statusButton.innerHTML = book.status ? "Read": "Not Read";
    updateLibraryDisplay()
    
}


const dialog = document.querySelector("dialog");
const openForm = document.getElementById("openForm")
const Button = document.getElementById("addBtn")


// ? How to add remove button?



openForm.addEventListener("click", () => {
    dialog.showModal();
})

Button.addEventListener('click', () => {
     dialog.close();
     updateLibraryDisplay()
})


Button.addEventListener("click", addToLibrary)



//? Place holder for books
let LOTR = new Book("Lord of the Rings", "George R.R Martin", 156, false)
myLibrary.push(LOTR)

let poppyWars = new Book("The Poppy Wars", "R.F Kuang", 450, true) //*leave end empty if you want not read
myLibrary.push(poppyWars)

updateLibraryDisplay()
