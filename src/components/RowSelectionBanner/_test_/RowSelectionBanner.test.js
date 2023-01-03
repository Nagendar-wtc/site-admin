import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import { testStore } from "../../../testUtils.js";
import RowSelectionBanner from "../index.js";
import ButtonComponent from "../../ui/ButtonComponent/index.js";


const props = {
    "selectionCount": 1
};
describe("RowSelectionBanner", () => {
    test("Should render properly", () => {
        render(<RowSelectionBanner {...{props}}/>);
        const wrapper = screen.getByTestId("row-selection")
        expect(wrapper).toBeInTheDocument();
        //expect(screen.getByTestId("PageTitle").textContent).toBe('Profile');
        
    })

    test("firing the buttons loaded - accept", () => {
        render(<RowSelectionBanner {...{props}}/>);
        const wrapper = screen.getByTestId("row-selection")
        expect(wrapper).toBeInTheDocument();
        const acceptClick = screen.getByRole('button', { name: /accept/i })
        fireEvent.click(acceptClick);
        //expect(screen.getByTestId("PageTitle").textContent).toBe('Profile');
    })
    test("firing the buttons loaded - reject", () => {
        render(<RowSelectionBanner {...{props}}/>);
        const wrapper = screen.getByTestId("row-selection")
        expect(wrapper).toBeInTheDocument();
        const rejectClick = screen.getByRole('button', { name: /reject/i })
        fireEvent.click(rejectClick);
        //expect(screen.getByTestId("PageTitle").textContent).toBe('Profile');
    })
    
    test("firing the buttons loaded - hide", () => {
        render(<RowSelectionBanner {...{props}}/>);
        const wrapper = screen.getByTestId("row-selection")
        expect(wrapper).toBeInTheDocument();
        const hideClick = screen.getByTestId('row-selection-close')
        fireEvent.click(hideClick);
        //expect(screen.getByTestId("PageTitle").textContent).toBe('Profile');
    })
})