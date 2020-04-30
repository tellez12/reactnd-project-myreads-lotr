import React, { Component } from 'react'
import Book from './Book'
class BooksGrid extends Component {
    render() {
        const { books} = this.props
        return (

            <ol className="books-grid">
                {books.map(b => {
                    return (
                        <li key={"li"+b.id}>
                            <Book book={b} key={b.id} UpdateBook={this.props.UpdateBook}/>
                        </li>
                    )
                })}

            </ol>

        )
    }
}

export default BooksGrid;
