import React from 'react';
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from '@testing-library/dom';

import App from './App';
import Dashboard from './components/Dashboard';

test('renders without crashing', () => {
  render(<App />);
});

test('Strike function adds 1 point to strike points', () => {

  const { getByTestId } = render(<Dashboard />);

  fireEvent.click(getByTestId("strikeButton"))
  expect(getByTestId("strikeValue")).toHaveTextContent(1);
})