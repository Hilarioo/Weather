import React from "react";
import { shallow } from "enzyme";
import Search from "../components/search/Search";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// render correctly
describe("<Search />", () => {
  it("has default temp & wind select", () => {
    // shallow isnt directly asserting on behavior of child components.
    const wrapper = shallow(
      <Search
        setSpeed={(v: string) => v}
        setLocation={(v: string) => v}
        setTemp={(v: string) => v}
      />
    );

    const temp = wrapper.find("#outlined-select-temp");
    expect(temp.props().value).toEqual("f");

    const speed = wrapper.find("#outlined-select-speed");
    expect(speed.props().value).toEqual("mph");
  });

  it("clicks and changes temp from select", () => {
    const wrapper = shallow(
      <Search
        setSpeed={(v: string) => v}
        setLocation={(v: string) => v}
        setTemp={(v: string) => v}
      />
    );

    let temp = wrapper.find("#outlined-select-temp").first();
    temp.simulate("change", {
      target: { value: "c" },
    });
    temp = wrapper.find("#outlined-select-temp").first();
    const obj: JSX.Element[] = [
      <option key='c' value='c'>
        Celsius (C)
      </option>,
      <option key='f' value='f'>
        Fahrenheit (F)
      </option>,
    ];
    expect(JSON.stringify(temp.props().children)).toBe(JSON.stringify(obj));
  });

  // SELECT [Wind Speed]
  it("clicks and changes speed from select", () => {
    const wrapper = shallow(
      <Search
        setSpeed={(v: string) => v}
        setLocation={(v: string) => v}
        setTemp={(v: string) => v}
      />
    );

    let speed = wrapper.find("#outlined-select-speed").first();
    speed.simulate("change", {
      target: { value: "kmh" },
    });
    speed = wrapper.find("#outlined-select-speed").first();
    const obj: JSX.Element[] = [
      <option key='kmh' value='kmh'>
        Kilometers (km/h)
      </option>,
      <option key='mph' value='mph'>
        Miles (mph)
      </option>,
    ];
    expect(JSON.stringify(speed.props().children)).toBe(JSON.stringify(obj));
  });
});
