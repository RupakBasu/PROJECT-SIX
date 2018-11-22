import React, {Component} from 'react';
export const MyContext = React.createContext();
{/* basically handle state*/}

export default class index extends Component{
  constructor(){
    super();
    this.state = {
      books:[],
      currentlyReading:[],
      wantToRead:[],
      read:[],
        addBooks: books => {
          const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
          const read = books.filter(book => book.shelf === "read");
          const wantToRead = books.filter(book => book.shelf === "wantToRead");
          this.setState({books, currentlyReading ,read ,wantToRead});
          // We have three shelves all along with its books & the books that field will return
          // a new array if the bookshelf matches the currently reading itll put it in a new array based on that
          // particular shelf
        },
        moveBook: (book, newShelf, allShelfs)=>{
          console.log(newShelf)
          const newBooks = this.state.books.map(allBooks => {
            const foundID = allShelfs[newShelf].find(
              bookID => bookID === allBooks.id
            );
            if (foundID) {
              allBooks.shelf = newShelf;
            }
            return allBooks;
          });
          this.state.addBooks(newBooks)
        }
    };
  }
  render(){
    return(
      <MyContext.Provider value={{...this.state}}>
          {this.props.children}
      </MyContext.Provider>
    )
  }
}

  {/* https://reactjs.org/docs/context.html*/}
  // {/* What we want our provider to handle the books which will be an array
  //   Then each indiviual shelf so it renders properly. */}
