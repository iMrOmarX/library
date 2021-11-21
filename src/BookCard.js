import React from 'react'

function BookCard({book , setshowModel}) {
    return (
        <div style={{
            backgroundImage:`url(${book.image})`,
            width: "300px",
            height: "400px"
        }}
        className="book-card">
            <div className="book-title">{book.title}</div>
            <button className="borrow-btn" onClick={() => setshowModel(true)}>borrow</button>
        </div>
    )
}

export default BookCard
