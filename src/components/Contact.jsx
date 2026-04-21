
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";

function Contact({ sectionRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_zcqyp5g",      
      "template_vxgwmoo",   
      formData,
      "fn3cvRoehWZCcc6mQ"      
    )
    .then(() => {
      setFormSent(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setFormSent(false), 4000);
    })
    .catch((error) => {
      console.error("Email send error:", error);
    });
  };

  return (
    <section ref={sectionRef} id="contact">
      <div className="section-card">
        <h2 className="section-title">Contact Me</h2>

        <p className="contact-info">
          If you'd like to get in touch, feel free to use the form below or reach me directly.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> kavinchinnaraj@gmail.com</p>
          <p><strong>Phone:</strong> +91 9361547517</p>
          <p><strong>Location:</strong> Coimbatore, India</p>
        </div>

        {formSent && (
          <div className="alert-success-custom">
            ✓ Message sent! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            className="contact-input contact-textarea"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-send">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;