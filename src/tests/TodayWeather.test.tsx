import React from "react";
import { render } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodayWeather from "../components/today/TodayWeather";
configure({ adapter: new Adapter() });

describe("<App />", () => {
  const wrapper = shallow(<TodayWeather />);
  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});
