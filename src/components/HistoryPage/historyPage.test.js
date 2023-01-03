import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { testStore } from "../../testUtils.js";
import { BrowserRouter } from "react-router-dom";
import HistoryPage from "./index.js";

const reducer = {
    configReducer:{
     }
};
const store = testStore(reducer);
describe("HistoryPage", () => {
  test("Should render properly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
            <HistoryPage />
        </BrowserRouter>
      </Provider>
    );
    const wrapper = screen.getByTestId("history-wrapper");
    expect(wrapper).toBeInTheDocument();
    // expect(screen.getByTestId("PageTitle").textContent).toBe("Profile");
  });
});
