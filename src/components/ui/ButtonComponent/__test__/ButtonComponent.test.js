import {fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ButtonComponent from "../index.js";


describe("ComponentFields", () => {
    test("Should render properly", () => {
        render(<ButtonComponent buttonText={"test"} onClick={jest.fn()}/>);
        const linkElement = screen.getByTestId("Button-test")
        console.log("CHECK=",linkElement);
        expect(linkElement).toBeInTheDocument();
    })
    test("Prop text working properly", () => {
       render(<ButtonComponent buttonText={"test"}/>);
        const linkElement = screen.getByText(/test/i);
        expect(linkElement).toBeInTheDocument();
    })
    xit("Prop text working properly1", () => {
        const onClick = jest.fn()
        render(<ButtonComponent buttonText={"test"}/>);
        const linkElement = screen.getByTestId("Button-test")
        fireEvent.click(linkElement)
    })
    
    it('should equal to 0', () => {
        const { getByTestId } = render(<ButtonComponent buttonText={"Accept"} onClick={jest.fn()}/>); 
        
        expect(getByTestId('Button-test')).toBeInTheDocument()
       });
    it('should equal to Button click', () => {
        const { getByTestId } = render(<ButtonComponent buttonText={"Accept"} onClick={jest.fn()}/>);
        const button = screen.getByRole('Button');
    
    fireEvent.click(button); 
    //     expect(getByTestId('table-test')).toBeInTheDocument()
    //     const button = screen.getByRole('button')
    // fireEvent.click(button)
       });
})