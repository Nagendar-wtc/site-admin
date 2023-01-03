import {fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import DropdownMenu from "../index.js";


describe("ComponentFields", () => {
    it("Should render properly Dropdown", () => {
        render(<DropdownMenu data-testid="dropdownMenu-test"/>);
        const linkElement = screen.queryByTestId("dropdownMenu-test");
        expect(linkElement).toBeDefined();
    })

    it("Should click properly Dropdown", () => {
        render(<DropdownMenu data-testid="dropdownMenu-test"/>);
        const linkElement = document.getElementById("dropdownName-div");
        fireEvent.click(linkElement);
        })
})