import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { testStore } from "../../../testUtils.js";
import MenuHeader from "../index.js";
import { TAB_MENU_OPTIONS } from "../../../utils/constants.js";
import { BrowserRouter } from "react-router-dom";

const reducer = {};
const store = testStore(reducer);
describe("MenuHeader", () => {
  test("Should render properly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
            <MenuHeader
                tabOptions={TAB_MENU_OPTIONS}
                handleChange={jest.fn()}
                showConfigurationOverlay={true}
                setConfigurationOverlay={jest.fn()}
            />
        </BrowserRouter>
      </Provider>
    );
    const wrapper = screen.getByTestId("menu-header");
    expect(wrapper).toBeInTheDocument();
    // expect(screen.getByTestId("PageTitle").textContent).toBe("Profile");
  });
});
