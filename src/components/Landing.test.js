import React from "react";
import { shallow } from "enzyme";

import Landing from "./Landing";

describe("<Landing />", () => {
  it("Renders without crashing", () => {
    shallow(<Landing />);
  });
});
