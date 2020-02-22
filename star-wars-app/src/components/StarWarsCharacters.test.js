import React from 'react';
import * as rtl from "@testing-library/react";
import App from "../App";

describe ("<StarWarsCharacters/> Tests", () => {

    it("should render <App/>", async () => {
        const wrapper = rtl.render(<App />);
    });

    it("should render previous & next button", async () => {
        const wrapper = rtl.render(<App />);
        const prevButton = wrapper.getByText(/previous/i);
        const nextButton = wrapper.getByText(/next/i);
        expect(prevButton).toBeVisible();
        expect(nextButton).toBeVisible();
    });

    it("should render the logo ", async () => {
        const wrapper = rtl.render(<App />);
        const logo = wrapper.getAllByAltText(/logo/i);
        expect(logo[0]).toBeVisible();
    });

})


