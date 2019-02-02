import React from "react";

class Book extends React.Component {
  state = {
    saved: false
  };

  render() {
    <div className="book">
      <img src={this.props.image} />
    </div>;
  }
}

export default Book;
