import {fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ProgressBarComponent from "../index.js";
const props={
    ProgressClass:"TableProgress",
    data:{
        "id": "adpr2",
        "command": "STOP",
        "type": "Manual",
        "asset": "WTG001",
        "user": "eScada User",
        "receivedTimestamp": new Date().getTime()/1000,
        "timestamp": 12345678,
        "state": "Pending",
        "decisionMaker": "Unknown",
        "decisionTimestamp": parseInt(new Date().getTime()/1000)+6,
        "reason": "test",
        "commandValue": null
    }
}


describe("ComponentFields", () => {
    //Timers
    // beforeEach(() => {
    //     jest.useFakeTimers()
    //   })
    //   afterEach(() => {
    //     jest.runOnlyPendingTimers()
    //     jest.useRealTimers()
    //   })
    
    it("Should render properly Dropdown", () => {
        render(<ProgressBarComponent {...props} data-testid="progressbar-test"/>);
        const linkElement = screen.queryByTestId("progressbar-test");
        expect(linkElement).toBeDefined();
    })
})