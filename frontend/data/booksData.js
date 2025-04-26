export const booksData = (id, books)=>{
    const bookDetils =  books.filter((book)=>{
        return book._id === id
    })
    return bookDetils[0]
}