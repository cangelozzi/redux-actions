var React = require('react');
var connect = require('react-redux').connect;

var Feedback = require('./Feedback');

var mapStateToProps = (state, props) => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);
