import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
    render() {
        const { books, name } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books ={books} UpdateBook={this.props.UpdateBook}/>
                </div>
            </div>
        )
    }
}

export default BookShelf;
