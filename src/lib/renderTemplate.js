/* eslint-disable linebreak-style */
require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplate = (reactElement, properties, response) => {
    const reactEl = React.createElement(reactElement, properties);

    const html = ReactDOMServer.renderToStaticMarkup(reactEl);

    response.write('<!DOCTYPE html>');
    response.write(html);
    response.end();
  };

  module.exports = renderTemplate;