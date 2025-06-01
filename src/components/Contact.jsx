function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <h2>Contact Me</h2>
        <form>
          <input className="form-control my-2" type="text" placeholder="Name" />
          <input className="form-control my-2" type="email" placeholder="Email" />
          <textarea className="form-control my-2" rows="4" placeholder="Message"></textarea>
          <button className="btn btn-primary mt-2">Send</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
