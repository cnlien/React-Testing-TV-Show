import React from 'react';
import { render } from '@testing-library/react'

// COMPONENTS
import App from './App';

test('App renders without crashing', () => {
    render(<App />)
})

test('Text appears when fetching data', () => {
    const { getByText } = render(<App />)
    const loadingMessage = getByText(/fetching data/i)
    expect(loadingMessage).toBeVisible
})