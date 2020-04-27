const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@shared/components': '../../shared/components/src',
    '@shared/models': '../../shared/models/src',
  })(config);

  return config;
};
