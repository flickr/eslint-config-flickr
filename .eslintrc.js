module.exports = {
  extends: './index.js',

  env: {
    node: true
  },

  rules: {
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent']
  }
};
