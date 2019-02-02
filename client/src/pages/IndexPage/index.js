import React from "react";
import booksService from "../../services/booksService";

import SearchForm from "../../components/SearchForm";
import Book from "../../components/Book";

class IndexPage extends React.Component {
  state = {
    books: []
  };

  handleSearch(books) {
    this.setState({ books });
  }

  handleSave(i) {
    const books = this.state.books.slice();

    booksService.saveBook(this.bookDataByIndex(i)).then(response => {
      books[i].saved = true;

      this.setState({ books });
    });
  }

  bookDataByIndex(index) {
    const { authors, description, etag, image, link, title } = this.state.books[
      index
    ];

    return {
      authors,
      description,
      etag,
      image,
      link,
      title
    };
  }

  render() {
    return (
      <>
        <SearchForm onSearch={books => this.handleSearch(books)} />
        <div className="row">
          {this.state.books.map((book, i) => {
            return <Book {...book} onClickHandler={() => this.handleSave(i)} />;
          })}
        </div>
      </>
    );
  }
}

export default IndexPage;
