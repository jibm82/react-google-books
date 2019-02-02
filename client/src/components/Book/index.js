import React from "react";

class Book extends React.Component {
  state = {
    saved: this.props.saved
  };

  render() {
    return (
      <div className="book col-md-4">
        <img src={this.props.image} />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>
          {this.props.saved ? (
            <label>Already saved</label>
          ) : (
            <button
              className="btn btn-primary"
              onClick={this.props.onClickHandler}
            >
              Save
            </button>
          )}
        </p>
      </div>
    );
  }
}

export default Book;
