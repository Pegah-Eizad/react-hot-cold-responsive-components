/* eslint no-console: "off" */

import React from 'react';
import ReactDomServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import express from 'express';
import browserify from 'browserify';
import babelify from 'babelify';
import MainComponent from './components/Main.jsx';

const app = express();
const port = 3000;

app.get('/bundle.js', (req, res) => {
  browserify('./client.js', { debug: true }).transform(babelify).bundle().pipe(res);
});

app.get('/', (req, res) => {
  const md = new MobileDetect(req.headers['user-agent']);

  let serverSideScreenClass = 'xl';
  if (md.phone() !== null) serverSideScreenClass = 'xs';
  if (md.tablet() !== null) serverSideScreenClass = 'md';

  //const component = <MainComponent defaultScreenClass={defaultScreenClass} />;
  //const content = ReactDomServer.renderToString(<MainComponent defaultScreenClass={defaultScreenClass} />);

  const component = <MainComponent serverSideScreenClass={serverSideScreenClass} />;
  const content = ReactDomServer.renderToString(component);

  res.send(`
    <!DOCTYPE html>
    <html style="background:#394264">
      <head>
        <title>React guessing game with react-grid-system responsive scheme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link href="https://fonts.googleapis.com/css?family=Passion+One" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Tajawal" rel="stylesheet">
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `);
  console.info('react-grid-system example rendered server-side.');
});

app.listen(port, () => {
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
