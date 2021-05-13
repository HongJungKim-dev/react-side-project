import React from 'react';

import { render } from '@testing-library/react';

import SearchMedia from './SearchMedia';

describe('SearchMedia', () => {
  it('render SearchMedia', () => {
    const { queryByText } = render(<SearchMedia />);

    expect(queryByText(/아이디어 검색/)).not.toBeNull();
  });
});
