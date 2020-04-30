import React from 'react'
import { Link, Route } from "react-router-dom"; 
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf';
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books:[]
  }

  componentWillMount() {
    this._asyncRequest = BooksAPI.getAll().then(
      externalData => {
        this._asyncRequest = null;
        this.setState({books:externalData});
        console.log(this.state);
      }
    );
  }

  render() {

    return (
      <div className="app">
        <Route path='/search' render={()=>(
          <div>
            <div className="search-books-bar">
              <Link to="/" className="close-search"> Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text" placeholder="Search by title or author"/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>


        )}/>
        <Route exact path='/' render={()=>(

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <BookShelf name="Currently Reading" books={this.state.books.filter(b=>b.shelf === "currentlyReading")}/>
                <BookShelf name="Want to Read" books={this.state.books.filter(b=>b.shelf === "wantToRead")}/>
                <BookShelf name="Read" books={this.state.books.filter(b=>b.shelf === "read")}/>

              </div>
            </div>
            <div className="open-search">
            <Link to="/search" >Add Book</Link>
            {/* onClick={() => this.setState({ showSearchPage: true })} */}

            </div>
          </div>

        )} />

        </div>
   

    )
  }
}

export default BooksApp
