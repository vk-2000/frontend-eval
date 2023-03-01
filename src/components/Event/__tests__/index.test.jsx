import { render, waitFor } from '@testing-library/react';
import Event from '..';
import mockData from '../../../mocks/mockData';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Event', () => {
  it('should render correctly', async () => {
    makeRequest.mockResolvedValue(mockData[0]);
    const { getByText } = render(<Event />);
    await waitFor(() => {
      expect(getByText('Battle of the Bands')).toBeTruthy();
    });
  });
});
