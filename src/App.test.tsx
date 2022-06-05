import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';


//TODO: Replace with tests for App.tsx
//TODO: Add test files for any other components created

test('renders learn react link', () =>
{
    render(<App/>);

    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
});
