import { fireEvent, render } from '@testing-library/react';
import Bookmark from '..';

describe('Bookmark', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Bookmark isBookmarked={false} onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render solid bookmark when isBookmarked is true', () => {
    const { getByAltText } = render(<Bookmark isBookmarked onChange={() => {}} />);
    const bookmark = getByAltText('bookmark');
    expect(bookmark.src).toContain('bookmark-solid.svg');
  });
  it('should render regular bookmark when isBookmarked is false', () => {
    const { getByAltText } = render(<Bookmark isBookmarked={false} onChange={() => {}} />);
    const bookmark = getByAltText('bookmark');
    expect(bookmark.src).toContain('bookmark-regular.svg');
  });
  it('should call onChange when bookmark is clicked', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(<Bookmark isBookmarked onChange={mockOnChange} />);
    const button = getByTestId('btn-bookmark');
    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
