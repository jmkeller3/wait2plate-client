import React from "react";
import { shallow } from "enzyme";

import { Restaurants } from "./Restaurants";

describe("<Restaurants />", () => {
  it("Renders without crashing", () => {
    shallow(<Restaurants restaurants={[]} />);
  });
});
