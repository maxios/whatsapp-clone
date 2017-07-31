import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // Needed for onTouchTap

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    injectTapEventPlugin();
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
