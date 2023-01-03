import {fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Label from "../index.js";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

describe("Label loaded", () => {
    const mockStore = configureStore();
    let store;
    test("Should render properly", () => {
        const state={
            "configReducer": {
                "auditHistory": []
            },
            "staticReducer": {
                "languages": {
                    "languageId": 1
                },
                "language_code": "ENG"
            }
        }
        store = mockStore(state);
        render(<Provider store={store}><Label /></Provider>);

        
        const linkElement = screen.getByTestId("Label-test")
        expect(linkElement).toBeInTheDocument();
    })
})