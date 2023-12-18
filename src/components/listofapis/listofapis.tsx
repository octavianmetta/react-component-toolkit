// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from "react";
import styled from "styled-components";

import { listofapisProps } from "./listofapis.types";

const Styledlistofapis = styled.div<listofapisProps>`
  color: #000;
  text-align: center;
`;

const listofapis: React.FC<listofapisProps> = ({ ...props }) => {
  return (
    <>
      <Styledlistofapis {...props} data-testid="listofapisTestId">
        {props.message}
      </Styledlistofapis>
    </>
  );
};

export default listofapis;
