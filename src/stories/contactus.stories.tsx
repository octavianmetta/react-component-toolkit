// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from "react";
import type { Story } from "@ladle/react";
import Contactus from "../components/contactus/contactus";
import { ContactUsProps } from "../components/contactus/contactus.types";

export const ContactUs: Story<ContactUsProps> = ({
  id,
  title,
  contactEmail,
}) => (
  <>
    <Contactus id={id} title={title} contactEmail={contactEmail} />
  </>
);

ContactUs.args = {
  id: "Contact Us",
  title: "Jangan ragu untuk mengirim pesan pada kami",
  contactEmail: "mail@gmail.com",
};
