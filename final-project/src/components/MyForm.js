import React from "react";

class MyForm extends React.Component {
  render() {
    return (
      <div className="my-form-container">
        <form action="https://formspree.io/xbjgwrwl" method="POST">
          <label>
            Your email:
            <input type="text" name="_replyto" />
          </label>
          <label className="message-area">
            Send a  message:
            <textarea className="text-area" name="message"></textarea>
          </label>

          <button className="submit-button" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
