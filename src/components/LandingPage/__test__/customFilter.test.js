import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { CustomFilter } from "../customFilter.js";

describe("custom filter", () => {
    test("Should render properly", () => {
        render(<CustomFilter options={{
            "field": "asset",
            "index": 0,
            "filterModel": {
                "value": null,
                "matchMode": "in"
            },
            "value": null
        }}
            optionsList={{ name: "test", value: "test" }}/>);
        const wrapper = screen.getByTestId("filter-heading")
        expect(wrapper).toBeInTheDocument();
        let input = screen.getByTestId('filter-input');
        fireEvent.change(input, {target: {value: 'test'}});
        expect(input.value).toBe('test')  

        let checkboxAll = screen.getByTestId('filter-select-all');
        fireEvent.change(checkboxAll, {checked: true});

    })
})