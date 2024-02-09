import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UniqueRemoteComponent from '../remote/src/UniqueRemoteComponent';

describe('UniqueRemoteComponent', () => {
  it('renders the title passed to it', () => {
    const { getByText } = render(<UniqueRemoteComponent title="Remote App Unique Title" />);
    expect(getByText('Remote App Unique Title')).toBeInTheDocument();
  });
});
