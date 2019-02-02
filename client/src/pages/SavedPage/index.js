import React from "react";
import booksService from "../../services/booksService";
import Book from "../../components/Book";
import Spotlight from "../../components/Spotlight";
import "./style.css";

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
        <Spotlight counter={this.state.books.length} />
        <div className="container">
          <div className="card-columns">
            {this.state.books.map((book, i) => {
              return (
                <Book
                  {...book}
                  onClickHandler={() => this.handleDelete(i)}
                  buttonClass="btn-danger"
                  buttonText="Remove"
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default SavedPage;
