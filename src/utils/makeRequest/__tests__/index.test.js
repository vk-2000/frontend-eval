import axios from 'axios';
import makeRequest from '..';
import { GET_ALL_EVENTS, UPDATE_EVENT } from '../../../constants/apiEndPoints';
import mockData from '../../../mocks/mockData';

jest.mock('axios');

describe('makeRequest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should make an API call when only apiEndPoint is specified and return response body', async () => {
    axios.mockResolvedValue({
      data: mockData,
    });
    const response = await makeRequest(GET_ALL_EVENTS);
    expect(response).toEqual(mockData);
  });

  it('should make an API call when apiEndPoint and dynamicConfig are specified and return response body', async () => {
    axios.mockResolvedValue({
      data: {
        isBookmarked: true,
      },
    });
    const response = await makeRequest(UPDATE_EVENT, {
      data: {
        isBookmarked: true,
      },
    });
    expect(response).toEqual({ isBookmarked: true });
  });

  it('should navigate to error page when API call fails without error code', async () => {
    const navigate = jest.fn();
    axios.mockRejectedValue({
      response: {},
    });
    await makeRequest(GET_ALL_EVENTS, {}, navigate);
    expect(navigate).toHaveBeenCalledWith('/error');
  });

  it('should navigate to error page when API call fails with error code', async () => {
    const navigate = jest.fn();
    axios.mockRejectedValue({
      response: {
        status: 500,
      },
    });
    await makeRequest(GET_ALL_EVENTS, {}, navigate);
    expect(navigate).toHaveBeenCalledWith('/error/500');
  });
});
