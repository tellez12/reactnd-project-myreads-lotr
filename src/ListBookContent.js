import React, { Component } from 'react'
import BookShelf from './BookShelf'

function ListBookContent(props) {
    let shelfs = [
        { name: "Currently Reading", filter: "currentlyReading" },
        { name: "Want to Read", filter: "wantToRead" },
        { name: "Read", filter: "read" },
    ];

    return (
        <div className="list-books-content">
            <div>
                {props.showOthers && (
                    <BookShelf name="Store"
                        key={"Store"}
                        books={props.books.filter(b => !b.shelf || b.shelf === "none")}
                        UpdateBook={props.UpdateBook} />
                )}

                {shelfs.map(s => {
                    return (
                        <BookShelf name={s.name}
                            key={"Search" + s.name}
                            books={props.books.filter(b => b.shelf === s.filter)}
                            UpdateBook={props.UpdateBook} />
                    )
                })}

            </div>
        </div>
    )
}


export default ListBookContent;