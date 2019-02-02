import React from "react";
import "./style.css";

function Spotlight(props) {
  return (
    <div className="spotlight">
      <div className="row  justify-content-md-center">
        <div className="col-md-6">
          <h1>
            {props.counter > 0
              ? `You have ${props.counter} ${
                  props.counter > 1 ? "books" : "book"
                } saved`
              : "You don't have any books saved"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
