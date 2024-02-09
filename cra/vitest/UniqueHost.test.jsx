import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UniqueHostComponent from '../host/src/UniqueHostComponent';

describe('UniqueHostComponent', () => {
  it('renders the title passed to it', () => {
    const { getByText } = render(<UniqueHostComponent title="Host App Unique Title" />);
    expect(getByText('Host App Unique Title')).toBeInTheDocument();
  });
});
