import React from 'react';
import App from "../App";
import * as rtl from "@testing-library/react";
import axios from "axios";
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';
import { fireEvent } from "@testing-library/react";

describe ("<StarWarsCharacters/> Tests", () => {

    it("should render <StarWarsCharacters/>", async () => {
        const wrapper = rtl.render(<StarWarsCharacters/>);
    });

    it("should render previous & next button", async () => {
        const wrapper = rtl.render(<StarWarsCharacters/>);
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

describe ("Async mock tests", () => {

    it("should", async () => {
        const wrapper = rtl.render(<StarWarsCharacters />);
    });
})


