import { render } from '@testing-library/react';
import Financials from './index';
import expect from "expect";

test('Inserts financials data correctly', () => {
  const testTenDayAverageTradingVolume = "123";
  const testFiftyTwoWeekLow = "456";
  const testFiftyTwoWeekHigh = "789";
  const testFiftyTwoWeekLowDate = "101112";
  const testBeta = "131415"
  const testFiftyTwoWeekPriceReturnDaily = "161718"

  const {container} = render(
      <Financials
          tenDayAverageTradingVolume={testTenDayAverageTradingVolume}
          fiftyTwoWeekLow={testFiftyTwoWeekLow}
          fiftyTwoWeekHigh={testFiftyTwoWeekHigh}
          fiftyTwoWeekLowDate={testFiftyTwoWeekLowDate}
          beta={testBeta}
          fiftyTwoWeekPriceReturnDaily={testFiftyTwoWeekPriceReturnDaily}
      />
  );


  expect(container.getElementsByClassName('fw-bold').length).toBe(6);
  expect(container.getElementsByClassName('fw-bold')[0].innerHTML).toBe(testTenDayAverageTradingVolume)
  expect(container.getElementsByClassName('fw-bold')[1].innerHTML).toBe(testFiftyTwoWeekLowDate)
  expect(container.getElementsByClassName('fw-bold')[2].innerHTML).toBe(testFiftyTwoWeekHigh)
  expect(container.getElementsByClassName('fw-bold')[3].innerHTML).toBe(testFiftyTwoWeekPriceReturnDaily)
  expect(container.getElementsByClassName('fw-bold')[4].innerHTML).toBe(testFiftyTwoWeekLow)
  expect(container.getElementsByClassName('fw-bold')[5].innerHTML).toBe(testBeta)
});