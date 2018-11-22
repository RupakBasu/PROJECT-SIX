import React, {Component} from 'react';
import Book from './Book';

export default class Shelf extends Component{
  render() {
    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {/* Book Component*/}
              {/*To render the books: first part is to check if the books are defined
              Then it will map over the books
              The mapping will take a single book will get all the details on the book using the spread operator
              and into its own component which will be like this.props.title vs this.books.title*/}
              {this.props.books && this.props.books.map(book => <Book key={book.id}{...book} moveBook={this.props.moveBook}/>)}
            </ol>
          </div>
        </div>
    );
  }
}
