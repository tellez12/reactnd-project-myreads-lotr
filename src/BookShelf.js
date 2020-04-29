import React, { Component } from 'react'
import Book from './Book'
class BookShelf extends Component {
    render() {
        const { books, name } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(b => {return (
                            <li>
                            <Book book={b} key={b.id}>

                            </Book>

                        </li>
                        )
                        })}

                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;
