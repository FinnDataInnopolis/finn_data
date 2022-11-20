import {render} from '@testing-library/react';
import HomePage from './homePage';
import expect from "expect";

test('Renders HomePage Skeletons Component', () => {
    const {container} = render(<HomePage/>);

    expect(container.getElementsByTagName("section")[0].children.length).toBe(2);
});