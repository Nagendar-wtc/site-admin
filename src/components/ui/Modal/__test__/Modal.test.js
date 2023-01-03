import {fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Modal from "../index.js";
const props={
    className:"TableProgress",
    footer:{},
    visible:true,
    onHide:jest.fn(),
    header:"header",
    closable:true,
    style:{width: '50vw'}
}

describe("ComponentFields", () => {
    it("Should render properly Modal", () => {
        render(<Modal {...props} data-testid="modal-test"/>);
        const linkElement = screen.queryByTestId("modal-test");
        expect(linkElement).toBeDefined();
    })
})