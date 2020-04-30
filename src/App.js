import React from 'react'
import { Link, Route } from "react-router-dom"; 
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import ListBookContent from './ListBookContent';
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

  fillData(){
    this._asyncRequest = BooksAPI.getAll().then(
      externalData => {
        this._asyncRequest = null;
        this.setState({books:externalData});
      }
    );
  }

  componentDidMount() {
    this.fillData();
  }

  UpdateBook =(book) =>{
    let books = this.state.books;
    var bookIndex = books.findIndex(x => x.id === book.id);
    if(bookIndex>=0){
      books[bookIndex] = book;
    }
    else{
      books.push(book);
    }
    this.setState({books:books});

  }



  render() {

    return (
      <div className="app">
        <Route path='/search' render={()=>(

          <BookSearch UpdateBook={this.UpdateBook}/>

        )}/>
        <Route exact path='/' render={()=>(

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBookContent books={this.state.books} showOthers={false} UpdateBook={this.UpdateBook}/>

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
