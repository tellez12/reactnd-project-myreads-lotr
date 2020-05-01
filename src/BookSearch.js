import React, { Component } from 'react';
import { Link } from "react-router-dom"
import ListBookContent from './ListBookContent'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
    state = {
        books: [],
        query: ""

    }

    handleChange = (event) => {

        if (event.target.value  ===""){
 
            this.setState({ 
                query: "",
                books: []
         })
        }
         else{
            this.setState({ query: event.target.value });
            this._asyncRequest = BooksAPI.search(event.target.value).then(
                booksFiltered => {
                    if (booksFiltered !== undefined && booksFiltered.error === undefined){
                        booksFiltered = this.props.UppdateSearchShelf(booksFiltered);
                        this.setState({ books: booksFiltered });
                    }
                    else {
                        this.setState({ books: [] });
                    }
                })
            }
    }

    render() {
        return (
            <div>
                <div className="search-books-bar">
                    <Link to="/" className="close-search" > Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
                        <input type="text" placeholder="Search by title or author" value={this.state.query}
                            onChange={this.handleChange} />

                    </div>
                </div>
                <br/>
                <br/>
                <ListBookContent books={this.state.books} showOthers={true} UpdateBook={this.props.UpdateBook}/>
            </div>
            
        )
    }
}

export default BookSearch;