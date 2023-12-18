// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import listofapis from "../components/listofapis/listofapis";

describe("Testing component : <listofapis />", () => {
  const componentId = "ComponentUnderTest";

  beforeAll(() => {
  });

  afterAll(() => {
  })
  
  beforeEach(() => {
  });

  afterEach(() => {
  });

  test("<listofapis /> should render with id", async () => {

    // Create our component with our generated id
    const testRenderer = renderer.create(<listofapis message="" id={componentId} />);

    // Use the created renderer to convert to json and then check it matches our expected snapshot
    const jsonSnapshot = testRenderer.toJSON();

    // Check that our rendered component does have the exact randomly generated componentid for this test
    expect(jsonSnapshot).toHaveProperty("props.id", componentId);

    // Match that our rendered component matches our snapshot of the component and ignore the random id
    expect(jsonSnapshot).toMatchSnapshot(
      {
        props: { id: expect.any(String) }
      }
    );
  });
});
