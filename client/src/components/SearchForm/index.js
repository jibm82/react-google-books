import React, { Component } from "react";
import booksService from "../../services/booksService";
import "./style.css";

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
      <div className="search-form-container">
        <div className="row  justify-content-md-center">
          <div className="col-md-6">
            <h1>Search for your favourite books on the Google Books site</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input
                  className="form-control"
                  name="query"
                  value={this.state.query}
                  onChange={this.handleInputChange}
                  placeholder="Search for a book"
                />
                <button className="btn btn-dark" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
