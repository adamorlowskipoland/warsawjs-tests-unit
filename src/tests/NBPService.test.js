import NBPService from "../NBPService";
import axios from 'axios';
import Mocks from '../mocks';
jest.mock('axios');

test('NBPService fetches currenct rates', async () => {
  const response = Mocks.axiosGet;
  axios.get.mockResolvedValue(response);
  const service = new NBPService();
  expect(await service.getCurrentRate('pln')).toEqual(3.717);
});


