import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import HeaderBanner from "../index.js";
import { Provider } from "react-redux";
import { testStore } from "../../../testUtils.js";


const reducer = {

};
const store = testStore(reducer)
describe("HeaderBanner", () => {
    test("Should render properly", () => {
        render(<Provider store={store}><HeaderBanner /></Provider>);
        const wrapper = screen.getByTestId("header-banner")
        expect(wrapper).toBeInTheDocument();
        expect(screen.getByText("COMMAND APPROVER")).toBeTruthy();
        
    })
})