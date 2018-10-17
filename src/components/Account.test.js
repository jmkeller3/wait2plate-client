import React from "react";
import { shallow } from "enzyme";

import Account from "./Account";

describe("<Account />", () => {
  it("Renders without crashing", () => {
    shallow(<Account />);
  });
});
