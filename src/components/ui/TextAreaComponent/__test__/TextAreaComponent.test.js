import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import TextAreaComponent from "../index.js";


describe("Text area ComponentFields", () => {
    test("Should render properly", () => {
        render(<TextAreaComponent />);
        const linkElement = screen.getByTestId("TextArea-test")
        expect(linkElement).toBeInTheDocument();
    })
    // test("Prop text working properly", () => {
    //     render(<ButtonComponent buttonText={"test"}/>);
    //     const linkElement = screen.getByText(/test/i);
    //     expect(linkElement).toBeInTheDocument();
    // })
    // test("Prop text working properly1", () => {
    //     const onClick = jest.fn()
    //     render(<ButtonComponent buttonText={"test"}/>);
    //     const linkElement = screen.getByTestId("Button-test")
    //     fireEvent.click(linkElement)
    // })
    
    
})