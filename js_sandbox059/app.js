import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Link text'
    }
  }
  render() {
    return (
      <html>
        <body>
          <a href="">{this.state.string}</a>
        </body>
      </html>
    )
  }
}
