import React from "react";
import { shallow } from "enzyme";

import Timer from "./Timer";

describe("<Timer />", () => {
  it("Renders without crashing", () => {
    shallow(<Timer />);
  });
});
