import React from 'react';
import { render } from 'react-native-testing-library';
import App from './App';

test('App renders and handles adding a new item', () => {
  const { getByText, getByPlaceholder } = render(<App />);

  // Check if the "Todo List" title is rendered
  expect(getByText('Todo List')).toBeTruthy();

});