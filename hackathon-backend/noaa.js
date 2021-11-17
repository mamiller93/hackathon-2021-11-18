import axios from 'axios';

class Noaa {
  constructor() {
    this.token = 'HECeJbEsCNMIDosTNLokoKzyuMFqIkOL';
    this.axios = axios.create({
      baseURL: 'https://www.ncdc.noaa.gov/cdo-web/api/v2',
      headers: {'Token': this.token}
    });
  }

  async temperature() {
    const params = {
      datasetid: 'GHCND', // daily dataset, 'GSOM' is monthly
      limit: '1000',
      startdate: '2021-05-01',
      enddate: '2021-05-01',
      datatypeid: 'TAVG',
      locationid: 'CITY:US060031', // san francisco
    }

    const res = await this.axios.get('data', { params: params });
    const results = res.data.results;

    const tavg = results[0].value;

    // data is in tenths of celcius, so 20 degrees C will be represented as 200
    return tavg / 10;
  }
}

export default Noaa;