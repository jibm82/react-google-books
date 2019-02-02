import React from "react";
import SearchForm from "../../components/SearchForm";

class IndexPage extends React.Component {
  state = {
    books: []
  };

  handleSearch(books) {
    this.setState({ books });
  }

  render() {
    return (
      <>
        <SearchForm onSearch={books => this.handleSearch(books)} />
        <ul>
          {this.state.books.map((book, i) => {
            return <li key={i}>{book.volumeInfo.title}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default IndexPage;
