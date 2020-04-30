import React, { Component } from 'react'
import Book from './Book'
class BooksGrid extends Component {
    render() {
        const { books} = this.props
        return (

            <ol className="books-grid">
                {books.map(b => {
                    return (
                        <li>
                            <Book book={b} key={b.id} />
                        </li>
                    )
                })}

            </ol>

        )
    }
}

export default BooksGrid;
