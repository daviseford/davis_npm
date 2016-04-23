/**
 * Created by loaner on 4/23/16.
 */
var React = require('react');
var Main = React.createClass({
  render: function () {
    return (
        <div className="main-container">
          {this.props.children}
        </div>
    )
  }
});

module.exports = Main;