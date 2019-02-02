import React from "react";
import booksService from "../../services/booksService";
import Book from "../../components/Book";

class SavedPage extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    booksService.getBooks().then(response => {
      this.setState({ books: response.data });
    });
  }

  handleDelete(index) {
    const book = this.state.books[index];

    booksService.deleteBook(book._id).then(response => {
      const books = this.state.books.slice();
      books.splice(index, 1);
      this.setState({ books });
    });
  }

  render() {
    return (
      <>
        <h1>This is the saved page</h1>
        <div className="row">
          {this.state.books.map((book, i) => {
            return (
              <Book {...book} onClickHandler={() => this.handleDelete(i)} />
            );
          })}
        </div>
      </>
    );
  }
}

export default SavedPage;
