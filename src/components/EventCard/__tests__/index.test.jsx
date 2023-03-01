import { fireEvent, render } from '@testing-library/react';
import EventCard from '..';
import mockData from '../../../mocks/mockData';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('EventCard', () => {
  it('should render correctly', () => {
    const mockEvent = mockData[0];
    const { getByText } = render(<EventCard
      event={mockEvent}
      handleBookmarkChange={jest.fn()}
      handleRegistrationChange={jest.fn()}
      allowRegistration
    />);
    expect(getByText('Battle of the Bands')).toBeTruthy();
  });

  it('should call handleBookmarkChange when bookmark is clicked', () => {
    const mockEvent = mockData[0];
    const mockHandleBookmarkChange = jest.fn();
    const { getByTestId } = render(<EventCard
      event={mockEvent}
      handleBookmarkChange={mockHandleBookmarkChange}
      handleRegistrationChange={jest.fn()}
      allowRegistration
    />);
    const button = getByTestId('btn-bookmark');
    fireEvent.click(button);
    expect(mockHandleBookmarkChange).toHaveBeenCalled();
  });

  it('should call handleRegistrationChange when register button is clicked', () => {
    const mockEvent = mockData[0];
    const mockHandleRegistrationChange = jest.fn();
    const { getByText } = render(<EventCard
      event={mockEvent}
      handleBookmarkChange={jest.fn()}
      handleRegistrationChange={mockHandleRegistrationChange}
      allowRegistration
    />);
    const button = getByText('Register');
    fireEvent.click(button);
    expect(mockHandleRegistrationChange).toHaveBeenCalled();
  });

  it('should call navigate when event card is clicked', () => {
    const mockEvent = mockData[0];
    const { getByTestId } = render(<EventCard
      event={mockEvent}
      handleBookmarkChange={jest.fn()}
      handleRegistrationChange={jest.fn()}
      allowRegistration
    />);
    const card = getByTestId('event-card');
    fireEvent.click(card);
    expect(mockNavigate).toHaveBeenCalled();
  });
});
