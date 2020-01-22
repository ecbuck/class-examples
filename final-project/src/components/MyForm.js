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
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
