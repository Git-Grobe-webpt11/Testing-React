import React from 'react';
import * as rtl from "@testing-library/react";
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

it('renders the previous button', async() => {
    mockGetData.mockReturnValue({ 
        results:[
        { name:'Luke Skywalker', url:'test'}
        ]
    })
    // const wrapper = rtl.render(<StarWarsCharacters />);

    
    rtl.act(() => {
    const nextBtn = rtl.render(<StarWarsCharacters />).getByText(/next/i);
    rtl.fireEvent.click(nextBtn);
})
    

    await expect(mockGetData).toHaveBeenCalled();

    // await?
    

    // expect(await wrapper.findByText(/luke/i)).toBeVisible();

});



