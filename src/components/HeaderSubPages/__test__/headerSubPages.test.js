import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import { testStore } from "../../../testUtils.js";
import HeaderSubPages from "../index.js";


const reducer = {

};
const store = testStore(reducer)
describe("HeaderSubPages", () => {
    test("Should render properly", () => {
        render(<Provider store={store}><HeaderSubPages {...{id: 'Profile', page: 'Profile'}}/></Provider>);
        const wrapper = screen.getByTestId("header-subpages")
        expect(wrapper).toBeInTheDocument();
        expect(screen.getByTestId("PageTitle").textContent).toBe('Profile');
        
    })
})