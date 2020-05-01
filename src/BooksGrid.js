import React, { Component } from 'react'
import Book from './Book'

function BooksGrid(props) {
    return (

        <ol className="books-grid">
            {props.books.map(b => {
                return (
                    <li key={"li"+b.id}>
                        <Book book={b} key={b.id} UpdateBook={props.UpdateBook}/>
                    </li>
                )
            })}

        </ol>

    )
  }


export default BooksGrid;
