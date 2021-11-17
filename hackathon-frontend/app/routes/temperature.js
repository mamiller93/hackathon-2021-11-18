import Route from '@ember/routing/route';

export default class TemperatureRoute extends Route {
  async model() {
    return fetch("http://localhost:3000/temperature")
      .then(res => res.json())
      .then(
        (result) => {
          return result.tavg;
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
