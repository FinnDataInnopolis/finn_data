import {render} from '@testing-library/react';
import SearchResults from './searchResults';
import {MemoryRouter} from "react-router-dom";
import expect from "expect";


test('Renders Search Results Skeletons Component', () => {
    const {container} = render(<SearchResults />, {wrapper: MemoryRouter});

    expect(container.getElementsByTagName("section")[0].children.length).toBe(2);
});