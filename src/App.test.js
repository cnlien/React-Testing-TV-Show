import React from 'react';
import { render, wait } from '@testing-library/react'
import { fetchShow as mockFetchShow} from './api/fetchShow';

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