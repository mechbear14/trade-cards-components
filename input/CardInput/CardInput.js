import React from "react";
import "./InputCard.css";

class CardInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onChange = (e) => {
    let textContent = e.target.textContent;
    if (textContent.length > 30) {
      e.target.textContent = this.state.text;
    } else {
      this.setState({
        text: textContent,
      });
      if (this.props.getText) {
        this.props.getText(textContent);
      }
    }
  };

  render() {
    return (
      <label htmlFor="card-text">
        <div className={`card ${this.props.kind}`}>
          <span
            className="response"
            contentEditable
            onInput={this.onChange}
            id="card-text"
          ></span>
        </div>
      </label>
    );
  }
}

export default CardInput;
