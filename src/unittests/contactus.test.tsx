// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { faker } from "@faker-js/faker";
import ContactForm from "../components/contactus/contactus";

const componentId: string = "ComponentUnderTest";
let faketitle: string = "";
let fakecontactEmail: string = "";

describe("Testing component : <contactus />", () => {
  const componentId = "ComponentUnderTest";

  beforeAll(() => {});

  afterAll(() => {});

  beforeEach(() => {
    faketitle = faker.lorem.words(4);
    fakecontactEmail = faker.internet.email();
  });

  afterEach(() => {
    faketitle = "";
    fakecontactEmail = "";
  });

  test("<contactus /> should render with id", async () => {
    // Create our component with our generated id
    const testRenderer = renderer.create(
      <ContactForm id={componentId} title="" contactEmail="" />
    );

    // Use the created renderer to convert to json and then check it matches our expected snapshot
    const jsonSnapshot = testRenderer.toJSON();

    // Check that our rendered component does have the exact randomly generated componentid for this test
    expect(jsonSnapshot).toHaveProperty("props.id", componentId);

    // Match that our rendered component matches our snapshot of the component and ignore the random id
    expect(jsonSnapshot).toMatchSnapshot({
      props: { id: expect.any(String) },
    });
  });
});
