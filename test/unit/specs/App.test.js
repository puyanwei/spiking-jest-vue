import { shallow } from "vue-test-utils";
import App from "../../../src/App";

describe("App.test.js", () => {
  let component;

  beforeEach(() => {
    component = shallow(App, {
      // Create a shallow instance of the component
      data: {
        messages: ["Cat"]
      }
    });
  });

  it('equals messages to ["Cat"]', () => {
    expect(component.vm.messages).toEqual(["Cat"]);
    // Within component.vm, we can access all Vue instance methods
  });

  it("has the expected html structure", () => {
    expect(component.element).toMatchSnapshot();
  });
});
