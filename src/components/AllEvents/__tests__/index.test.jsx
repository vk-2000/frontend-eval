import { fireEvent, render, waitFor } from '@testing-library/react';
import AllEvents from '..';
import mockData from '../../../mocks/mockData';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('All events', () => {
  it('should show loading message', async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getByText, getAllByTestId } = render(<AllEvents />);
    expect(getByText('Loading ...')).toBeTruthy();
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(4);
    });
  });
  it('should render all the events when loaded', async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getAllByTestId } = render(<AllEvents />);
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(4);
    });
  });

  it('should render only searched events', async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getAllByTestId, getByPlaceholderText } = render(<AllEvents />);
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(4);
    });
    const searchInput = getByPlaceholderText('EVENT NAME');
    fireEvent.change(searchInput, { target: { value: 'kar' } });
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(1);
    });
  });

  it('should render only bookmarked events', async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getAllByTestId, getByLabelText } = render(<AllEvents />);
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(4);
    });
    const filter = getByLabelText('BOOKMARKED');
    expect(filter).toBeTruthy();
    fireEvent.click(filter);
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(1);
    });
  });
  it('should render only registered events', async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getAllByTestId, getByLabelText } = render(<AllEvents />);
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(4);
    });
    const filter = getByLabelText('REGISTERED');
    expect(filter).toBeTruthy();
    fireEvent.click(filter);
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(1);
    });
  });
  it('should render only events with seats available', async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getAllByTestId, getByLabelText } = render(<AllEvents />);
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(4);
    });
    const filter = getByLabelText('SEATS AVAILABLE');
    expect(filter).toBeTruthy();
    fireEvent.click(filter);
    await waitFor(() => {
      expect(getAllByTestId('event-card')).toHaveLength(3);
    });
  });
});
