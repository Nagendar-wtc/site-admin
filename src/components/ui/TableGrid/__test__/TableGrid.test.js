import {fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import TableGrid from "../index.js";
const props={
    tableData:[],
    columnHeaders:[],
    selectedRows:jest.fn(),
    ProgressClass:"TableProgress",
    selection : false,
    stripedRows : false,
    paginator : false
}

describe("ComponentFields", () => {
    it("Should render properly Dropdown", () => {
        const { getByTestId }= render(<TableGrid {...props}/>);
        expect(getByTestId('table-test')).toBeInTheDocument()
    })
})