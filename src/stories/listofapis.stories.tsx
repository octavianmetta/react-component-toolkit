// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from "react";
import type { Story } from "@ladle/react";
import Listofapis from "../components/listofapis/listofapis";
import { listofapisProps } from "../components/listofapis/listofapis.types";

export const Basiclistofapis: Story<listofapisProps> = ({ id, message }) => (
  <>
    <Listofapis id={id} message={message} />
  </>
);

Basiclistofapis.args = {
  id: "listofapisControl",
  message: "Hello >!",
};
