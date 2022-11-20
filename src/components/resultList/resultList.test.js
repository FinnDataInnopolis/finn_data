import {render} from '@testing-library/react';
import ResultList from './index';
import {MemoryRouter} from 'react-router-dom';
import expect from "expect";

test('Inserts resulting data correctly', () => {
    const testList = [
        {
            id: "0",
            symbol: "USD",
            displaySymbol: "USD",
            description: "test",
            type: "test",
        },
        {
            id: "2",
            symbol: "USD",
            displaySymbol: "USD",
            description: "test",
            type: "test",
        },
        {
            id: "3",
            symbol: "USD",
            displaySymbol: "USD",
            description: "test",
            type: "test",
        }
    ]

    const {container} = render(
        <ResultList
            list={testList}
        />, {wrapper: MemoryRouter}
    );

    expect(container.getElementsByClassName("cursor-pointer").length).toBe(3)

});