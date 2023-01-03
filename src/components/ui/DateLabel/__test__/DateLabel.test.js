import {fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import DateLabel from "../index.js";


describe("DateLabel", () => {
    test("Should render properly", () => {
        render(<DateLabel/>);
        const linkElement = screen.getByTestId("DateLabel-test")
        expect(linkElement).toBeInTheDocument();
    })
    
    
    
    
})