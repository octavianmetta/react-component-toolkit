// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react'
import type { Story } from "@ladle/react";
import Contactus from "../components/contactus/contactus";
import { contactusProps } from "../components/contactus/contactus.types";

export const Basiccontactus: Story<contactusProps> = ({ id, message }) => (
    <>
      <Contactus 
            id={id}
            message={message}
        />
    </>
  );

Basiccontactus.args = {
    id: 'contactusControl',
    message: "Hello contactus!"
};

