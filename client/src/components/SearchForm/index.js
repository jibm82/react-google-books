import React, { Component } from "react";
import booksService from "../../services/booksService";

class SearchForm extends Component {
  state = {
    query: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    booksService.search(this.state.query).then(response => {
      this.props.onSearch(response.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="query"
          value={this.state.query}
          onChange={this.handleInputChange}
          placeholder="Search for a book"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
