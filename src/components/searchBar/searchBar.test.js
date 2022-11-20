import { render } from '@testing-library/react';
import SearchBar from './index';
import { MemoryRouter } from 'react-router-dom';

test('Renders SearchBar Component', () => {
  render(<SearchBar />, {wrapper: MemoryRouter});
});