/* eslint-disable max-len */
import { fireEvent, render } from '@testing-library/react';
import ControlPanel from '..';

describe('Control Panel', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ControlPanel onSearchChange={jest.fn()} onFilterChange={jest.fn()} />);
    expect(getByText('Filter')).toBeTruthy();
  });
  it('should call onSearchChange when search input is changed', () => {
    const mockOnSearchChange = jest.fn();
    const { getByPlaceholderText } = render(<ControlPanel onSearchChange={mockOnSearchChange} onFilterChange={jest.fn()} />);
    const input = getByPlaceholderText('EVENT NAME');
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockOnSearchChange).toHaveBeenCalled();
  });
  it('should call onFilterChange when filter is changed to all', () => {
    const mockOnFilterChange = jest.fn();
    const { getByLabelText } = render(<ControlPanel onSearchChange={jest.fn()} onFilterChange={mockOnFilterChange} />);
    const filter = getByLabelText('ALL');
    expect(filter).toBeTruthy();
    fireEvent.click(filter);
    expect(mockOnFilterChange).toHaveBeenCalled();
  });
  it('should call onFilterChange when filter is changed to registered', () => {
    const mockOnFilterChange = jest.fn();
    const { getByLabelText } = render(<ControlPanel onSearchChange={jest.fn()} onFilterChange={mockOnFilterChange} />);
    const filter = getByLabelText('REGISTERED');
    expect(filter).toBeTruthy();
    fireEvent.click(filter);
    expect(mockOnFilterChange).toHaveBeenCalled();
  });
  it('should call onFilterChange when filter is changed to bookmarked', () => {
    const mockOnFilterChange = jest.fn();
    const { getByLabelText } = render(<ControlPanel onSearchChange={jest.fn()} onFilterChange={mockOnFilterChange} />);
    const filter = getByLabelText('BOOKMARKED');
    expect(filter).toBeTruthy();
    fireEvent.click(filter);
    expect(mockOnFilterChange).toHaveBeenCalled();
  });
  it('should call onFilterChange when filter is changed to seats available', () => {
    const mockOnFilterChange = jest.fn();
    const { getByLabelText } = render(<ControlPanel onSearchChange={jest.fn()} onFilterChange={mockOnFilterChange} />);
    const filter = getByLabelText('SEATS AVAILABLE');
    expect(filter).toBeTruthy();
    fireEvent.click(filter);
    expect(mockOnFilterChange).toHaveBeenCalled();
  });
  it('should hide filter when filter icon is clicked', () => {
    const { getByText, queryByText } = render(<ControlPanel onSearchChange={jest.fn()} onFilterChange={jest.fn()} />);
    const filter = getByText('Filter');
    expect(filter).toBeTruthy();
    fireEvent.click(filter);
    expect(queryByText('ALL')).toBeNull();
  });
});
