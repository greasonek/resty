import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from '../src/App';

test('Test input field for url', async () => {
  render(<App />);

  const dummyUrl = 'http://helloworld.com';
  const formInput = screen.getByTestId('formInput');
  const goButton = screen.getByTestId('goButton');

  fireEvent.change(formInput, { target: {value: dummyUrl} });
  fireEvent.submit(goButton);

  const testValue = `URL: ${dummyUrl}`;
  const badTest = 'URL: Bad Url';

  await waitFor(() => {
    expect(screen.queryByText(testValue)).toBeInTheDocument();
    expect(screen.queryByText(badTest)).not.toBeInTheDocument();
  });
});

test('Test input field for text area', async () => {
  render(<App />);
  const dummyText = 'hello world';
  const inputText = screen.getByTestId('inputText');

  fireEvent.change(inputText, { target: {value: dummyText} });

  const testValue = `${dummyText}`;

  await waitFor(() => {
    expect(screen.queryByText(testValue)).toBeInTheDocument();
  });
});