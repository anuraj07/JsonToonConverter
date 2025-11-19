import { render, screen, fireEvent } from '@testing-library/react';
import Converter from './Converter';

describe('Converter', () => {
  test('renders the converter component', () => {
    render(<Converter />);
    expect(screen.getByLabelText('JSON Input')).toBeInTheDocument();
    expect(screen.getByLabelText('TOON Output')).toBeInTheDocument();
  });

  test('converts valid JSON to TOON', () => {
    render(<Converter />);
    const jsonInput = screen.getByLabelText('JSON Input');
    fireEvent.change(jsonInput, { target: { value: '{"a": 1}' } });
    fireEvent.click(screen.getByText('Convert'));
    const toonOutput = screen.getByLabelText('TOON Output');
    expect(toonOutput.value).toBe('a: 1');
  });

  test('shows an error for invalid JSON', () => {
    render(<Converter />);
    const jsonInput = screen.getByLabelText('JSON Input');
    fireEvent.change(jsonInput, { target: { value: '{"a": 1' } });
    fireEvent.click(screen.getByText('Convert'));
    expect(screen.getByText('Invalid JSON format.')).toBeInTheDocument();
  });

  test('shows an error for empty JSON', () => {
    render(<Converter />);
    fireEvent.click(screen.getByText('Convert'));
    expect(screen.getByText('JSON input is empty.')).toBeInTheDocument();
  });

  test('loads sample JSON', () => {
    render(<Converter />);
    fireEvent.click(screen.getByText('Sample'));
    const jsonInput = screen.getByLabelText('JSON Input');
    expect(jsonInput.value).not.toBe('');
  });

  test('clears the input and output', () => {
    render(<Converter />);
    const jsonInput = screen.getByLabelText('JSON Input');
    fireEvent.change(jsonInput, { target: { value: '{"a": 1}' } });
    fireEvent.click(screen.getByText('Convert'));
    fireEvent.click(screen.getByText('Clear'));
    const toonOutput = screen.getByLabelText('TOON Output');
    expect(jsonInput.value).toBe('');
    expect(toonOutput.value).toBe('');
  });

  test('beautifies JSON', () => {
    render(<Converter />);
    const jsonInput = screen.getByLabelText('JSON Input');
    fireEvent.change(jsonInput, { target: { value: '{"a":1}' } });
    fireEvent.click(screen.getByText('Beautify'));
    expect(jsonInput.value).toBe('{\n  "a": 1\n}');
  });
});
