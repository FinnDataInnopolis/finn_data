import { render } from '@testing-library/react';
import Navbar from './index';
import { MemoryRouter } from 'react-router-dom';

test('Renders Navbar Component', () => {
  render(<Navbar />, {wrapper: MemoryRouter});
});