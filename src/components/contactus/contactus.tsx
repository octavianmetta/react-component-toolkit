import React, { useState } from "react";
import { ContactUsProps } from "./contactus.types";
import {
  Button,
  InputLabel,
  TextField,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
  },
});
const Title = styled("h4")({
  color: "#c2141c",
  fontSize: "28px",
  fontFamily: "Arial",
  fontWeight: 700,
  lineHeight: "32px",
  wordWrap: "break-word",
});
const ContactUsTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderColor: "#dadee3",
    borderRadius: "30px",
    marginTop: 10,
    marginBottom: 10,
    "&:hover fieldset": {
      borderColor: "#dadee3", // warna border saat hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "red", // warna border saat fokus
    },
  },
});

const SubmitButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "7px 20px",
  backgroundColor: "#09101D",
  fontFamily: ["Arial"].join(","),
  "&:hover": {
    backgroundColor: "#C2141C",
  },
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
        <Title>{props.title}</Title>
        <form onSubmit={handleSubmit} style={{ textAlign: "right" }}>
          <ContactUsTextField
            fullWidth
            variant="outlined"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
            InputProps={{
              style: {
                borderRadius: "8px",
              },
            }}
            InputLabelProps={{ style: { color: "#dadee3" } }}
            helperText={formErrors.name ? "Required" : ""}
          />

          <ContactUsTextField
            fullWidth
            variant="outlined"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            error={formErrors.phone}
            helperText={formErrors.phone ? "Required" : ""}
            InputLabelProps={{ style: { color: "#dadee3" } }}
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
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            error={formErrors.subject}
            helperText={formErrors.subject ? "Required" : ""}
            InputLabelProps={{ style: { color: "#dadee3" } }}
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
            placeholder="Note"
            value={formData.notes}
            onChange={handleChange}
            error={formErrors.notes}
            helperText={formErrors.notes ? "Required" : ""}
            InputLabelProps={{ style: { color: "#dadee3" } }}
            InputProps={{
              style: {
                borderRadius: "8px",
              },
            }}
          />
          <br />
          <br />
          <SubmitButton variant="contained" type="submit">
            Submit
          </SubmitButton>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default ContactForm;
