import React, {Component} from 'react';

import Shelf from '../components/Shelf';
import FAB from '../components/FAB';
import {getAll} from '../BooksAPI';


export default class Home extends Component{
  // {/* Here we are pulling all the books from the book API.js file*/}
  async componentDidMount(){
    try{
      const books = await getAll();
      this.props.addBooks(books);
    } catch(error) {
      console.log(error)
    }
  }
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* Shelf Component*/}
          <Shelf title = 'Currently Reading' books={this.props.currentlyReading} moveBook={this.props.moveBook}/>
          <Shelf title = 'Want To Read' books={this.props.wantToRead} moveBook={this.props.moveBook}/>
          <Shelf title = 'Read' books={this.props.read} moveBook={this.props.moveBook}/>
        </div>
        {/* FAB Component*/}
        <FAB/>
      </div>
    );
  }
}
