import React, { Component } from 'react'
import BookShelf from './BookShelf'

class ListBookContent extends Component {
    shelfs = [
        { name: "Currently Reading", filter: "currentlyReading" },
        { name: "Want to Read", filter: "wantToRead" },
        { name: "Read", filter: "read" },
    ];
    render() {

        return (


            <div className="list-books-content">
                <div>
                {this.props.showOthers && (
                        <BookShelf name="Store"
                        key ={"Store"}
                        books={this.props.books.filter(b => !b.shelf || b.shelf === "none")}
                        UpdateBook={this.props.UpdateBook} />
                    )}

                    {this.shelfs.map(s=>{ return(
                          <BookShelf name={s.name}
                          key={"Search"+s.name}
                          books={this.props.books.filter(b => b.shelf === s.filter)}
                          UpdateBook={this.props.UpdateBook} />
                    )
                    })}
                    
                </div>
            </div>
        )
    }
}

export default ListBookContent;