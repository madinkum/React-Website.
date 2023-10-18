import React from "react";

const Contacts = () => {
  return (
    <div id="body">
      <div className="contact">
        <div className="form-container">
          <div className="left-contact">
            <div className="left-inner-contact">
              <h2>Let's Chat</h2>
              <p>
                Whether you have a question, want to start a project or simply
                want to connect.
              </p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
            </div>
          </div>
          <div className="right-contact">
            <div className="right-inner-contact">
              <form
                action="mailto:MadinkuFinny@gmail.com"
                method="post"
                encType="text/plain"
              >
                <h2 className="lg-view">Contact Me</h2>
                <p>* Required</p>
                <input className="label" type="text" placeholder="Name *" />
                <input className="label" type="email" placeholder="Email *" />
                <input className="label" type="phone" placeholder="Phone" />
                <textarea
                  className="label"
                  rows={4}
                  placeholder="Message"
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script src="index.js"></script>
    </div>
  );
};

export default Contacts;
