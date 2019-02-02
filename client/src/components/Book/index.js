import React from "react";
import "./style.css";

class Book extends React.Component {
  state = {
    saved: this.props.saved
  };

  render() {
    return (
      <div className="book card">
        <div className="card-header text-center">
          <img className="img-fluid" src={this.props.image} />
        </div>
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <h6 className="card-text">By {this.props.authors.join(", ")}</h6>
          <div className="description card-text">
            {this.props.description != undefined ? (
              this.props.description
            ) : (
              <span className="text-muted">No description found</span>
            )}
          </div>
        </div>
        <div className="card-footer text-right">
          {this.props.saved ? (
            <span class="badge badge-success">Already saved!</span>
          ) : (
            <button
              className={`btn ${this.props.buttonClass}`}
              onClick={this.props.onClickHandler}
            >
              {this.props.buttonText}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Book;
