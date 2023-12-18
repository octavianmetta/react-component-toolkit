import React, { useState } from "react";
import "./ContactForm.css"; // Import file CSS
import { ContactUsProps } from "./contactus.types";
import { TextField, ThemeProvider, createTheme, styled } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
  },
});

const ContactUsTextField = styled(TextField)({
  borderColor: "#dadee3",
  borderWidth: 1,
  borderRadius: "30px",
  marginTop: 10,
  marginBottom: 10,
});

const ContactForm: React.FC<ContactUsProps> = ({ ...props }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    subject: false,
    notes: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: e.target.value.trim() === "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      subject: formData.subject.trim() === "",
      notes: formData.notes.trim() === "",
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    const { name, phone, subject, notes } = formData;

    const emailSubject = encodeURIComponent(subject);

    const emailBody = `Notes: ${notes}%0A%0AName: ${name}%0APhone Number: ${phone}`;

    const mailtoLink = `mailto:${props.contactEmail}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h4>{props.title}</h4>
        <form onSubmit={handleSubmit}>
          <ContactUsTextField
            fullWidth
            variant="outlined"
            type="text"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
            InputProps={{
              style: {
                borderRadius: "8px",
              },
            }}
            helperText={formErrors.name ? "Required" : ""}
          />

          <ContactUsTextField
            fullWidth
            variant="outlined"
            type="tel"
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            error={formErrors.phone}
            helperText={formErrors.phone ? "Required" : ""}
            InputProps={{
              style: {
                borderRadius: "8px",
              },
            }}
          />
          <ContactUsTextField
            fullWidth
            variant="outlined"
            type="text"
            name="subject"
            label="Subject"
            value={formData.subject}
            onChange={handleChange}
            error={formErrors.subject}
            helperText={formErrors.subject ? "Required" : ""}
            InputProps={{
              style: {
                borderRadius: "8px",
              },
            }}
          />
          <ContactUsTextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            name="notes"
            label="Note"
            value={formData.notes}
            onChange={handleChange}
            error={formErrors.notes}
            helperText={formErrors.notes ? "Required" : ""}
            InputProps={{
              style: {
                borderRadius: "8px",
              },
            }}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </ThemeProvider>
  );
};

export default ContactForm;
