import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import { mockStore, initialState } from '../test/mock'
import Post from './Post';

test('default render', () => {
  render(
    <Provider store={mockStore(initialState)}>
        <Post />
    </Provider>
  );
  const linkElement = screen.getByText(/edit/i);
  expect(linkElement).toBeInTheDocument();
});

test('test edit view', () => {
    render(
      <Provider store={mockStore(initialState)}>
          <Post />
      </Provider>
    );
    fireEvent.click(screen.getByText(/edit/i))
    expect(screen.getByText(/save/i)).toBeInTheDocument();
  });
  
