import React from 'react';
import { connect } from 'react-redux';
import GuessMaker from './GuessMaker';

const mapStateToProps = (state, props) => ({
  currentGuess: state.currentGuess
});

export default connect(mapStateToProps)(GuessMaker);
