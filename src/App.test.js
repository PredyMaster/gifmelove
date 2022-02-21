import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const title = screen.getByText(/Gif me/i);
  expect(title).toBeInTheDocument();
});


/* test('the gifs exists', async () => {
  const {container} = render(<App />);
  const gifLink = await wait( () => {
    container.querySelector('.gifContainer')
  })
  expect(title).toBeInTheDocument();
}); */


test('search from could be used', async () => {
  render( <App />)
  const input = await screen.findByRole('textbox')
  fireEvent.change(input, { value: 'Matrix'})
})