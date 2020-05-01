import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

function BookShelf(props){
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                <BooksGrid books ={props.books} UpdateBook={props.UpdateBook}/>
            </div>
        </div>
    )
}

export default BookShelf;
