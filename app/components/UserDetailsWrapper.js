/**
 * Created by loaner on 4/24/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper(props) {
  return (
      <div className="col-sm-6">
        <p className="lead">{props.header}</p>
        {props.children}
      </div>

  )
}

module.exports = UserDetailsWrapper;