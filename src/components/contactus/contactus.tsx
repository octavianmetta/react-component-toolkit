import React, { useState } from "react";
import "./ContactForm.css"; // Import file CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, subject, notes } = formData;

    const emailSubject = encodeURIComponent(subject);

    const emailBody = `Notes: ${notes}%0A%0AName: ${name}%0APhone Number: ${phone}`;

    const mailtoLink = `mailto:octavianmetta@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <h4>Jangan ragu untuk mengirim pesan pada kami</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="notes"
          placeholder="Note"
          value={formData.notes}
          onChange={handleChange}></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
