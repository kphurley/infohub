const _ = require('lodash');

class UnsplashFormatter {
  constructor(data) {
    this.data = data;
  }

  format() {
    return { urls: this.data.urls }
  }
}

module.exports = UnsplashFormatter;