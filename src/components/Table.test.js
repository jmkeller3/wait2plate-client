import React from "react";
import { shallow } from "enzyme";

import Table from "./Table";

describe("<Table />", () => {
  it("Renders without crashing", () => {
    shallow(<Table reports={[]} />);
  });
});
