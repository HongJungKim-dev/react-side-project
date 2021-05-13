import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('render App', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/wit team3 side project start!/)).not.toBeNull();
  });
});
