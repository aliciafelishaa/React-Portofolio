import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="textContainer">
          <h1>Let's Work Together!</h1>
          <div className="socmed">
            <h6>Gmail</h6>
            <p>aliciafelisha67@gmail.com</p>
          </div>
          <div className="socmed">
            <h6>LinkedIn</h6>
            <p>
              <a
                href="https://www.linkedin.com/in/alicia-felisha-0b12a9284/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alicia Felisha
              </a>
            </p>
          </div>
          <div className="socmed">
            <h6>GitHub</h6>
            <p>
              <a
                href="https://github.com/aliciafelishaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/aliciafelishaa
              </a>
            </p>
          </div>
          <div className="socmed">
            <h6>Phone</h6>
            <p>+62 877 0452 5259</p>
          </div>
        </div>

        <form className="formContainer">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="5" placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
