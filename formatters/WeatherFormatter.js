const _ = require('lodash');

class WeatherFormatter {
  constructor(data) {
    this.data = data;
  }

  format() {
    return _.merge(
      { current: this.formatCurrent() },
      { daily: this.formatDaily() }
    )
  }

  formatCurrent() {
    const { currently } = this.data;

    return _.pick(currently, [
      'icon',
      'summary',
      'temperature'
    ]);
  }

  formatDaily() {
    const { daily } = this.data;

    return daily.data.map((dataElement) => {
      return _.pick(dataElement, [
        'icon',
        'precipProbability',
        'precipType',
        'summary',
        'temperatureHigh',
        'temperatureLow'
      ]);
    });
  }
}

module.exports = WeatherFormatter;