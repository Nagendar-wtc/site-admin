import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { testStore } from "../../../testUtils.js";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "../index.js";

const reducer = {
    configReducer:{
       commandsData:[
        {id:"adpr4",
        command:"RESET",
        type:"Manual",
        asset:"WTG001",
        user:"eScada User",
        receivedTimestamp:1666777200,
        timestamp:12345678,
        state:"Pending",
        decisionMaker:"System",
        decisionTimestamp:1665493669,
        reason:null,
        commandValue:null}
       ] 
    }
};
const store = testStore(reducer);
describe("MenuHeader", () => {
  test("Should render properly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
      </Provider>
    );
    const wrapper = screen.getByTestId("request-queue-wrapper");
    expect(wrapper).toBeInTheDocument();
    // expect(screen.getByTestId("PageTitle").textContent).toBe("Profile");
  });
});
