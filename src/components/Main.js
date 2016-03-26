require('normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello Worlds!</h1>
        <button className="btn btn-default" type="submit">Button</button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
