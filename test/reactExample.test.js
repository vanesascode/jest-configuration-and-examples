// IT WILL ONLY WORK IN A REACT APP


import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from '../MyComponent';

test('button click should update the state', () => {
  render(<MyComponent />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Updated Text')).toBeInTheDocument();
});
