module.exports = function({ addUtilities }) {
    addUtilities({
      '.app-region-drag': {
        '-webkit-app-region': 'drag',
      },
      '.app-region-no-drag': {
        '-webkit-app-region': 'no-drag',
      },
    });
  };
  