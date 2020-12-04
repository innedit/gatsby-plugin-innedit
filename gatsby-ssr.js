// eslint-disable-next-line import/no-extraneous-dependencies
const React = require('react');

const format = function format(string) {
  return string
    .split(' ')
    .map(s => s.replace(/^\w/, s1 => s1.toUpperCase()))
    .join(' ');
};

const getFonts = function getFonts(options) {
  const fonts = options.fonts.map(format);

  return fonts.join('&family=').replace(/ /g, '+');
};

const getDisplay = options =>
  options.display ? `&display=${options.display}` : '';

exports.onRenderBody = ({ setHeadComponents }, options) => {
  if (options && options.fonts) {
    const link = `https://fonts.googleapis.com/css2?family=${getFonts(
      options,
    )}${getDisplay(options)}`;

    setHeadComponents([
      React.createElement('link', {
        href: link,
        key: 'fonts',
        rel: 'stylesheet',
      }),
    ]);
  }
};
