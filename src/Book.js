import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

    handleChange = (event) => {
        let {book} = this.props;
        book.shelf = event.target.value;
        BooksAPI.update(book,book.shelf);
        this.props.UpdateBook(book);


    }
    render() {
        const {book} = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf? book.shelf:"none"} onChange={this.handleChange} >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?book.authors.join():"Anonymous"}</div>
            </div>
        )
    }
}

export default Book;
