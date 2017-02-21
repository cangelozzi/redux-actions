import React from 'react';
import { guessNumber } from '../actions'

export default class GuessMaker extends React.Component {
  constructor() {
    super();
    this.guessNumber = this.guessNumber.bind(this);
  }

  guessNumber(event) {
    event.preventDefault();
    this.props.dispatch(guessNumber(this.props.currentGuess));
  }

  render() {
    return <form onSubmit={ this.guessNumber }>
      <input type='text' placeholder='Choose a number between 1 and 100!' />
      <input type='submit' value='Guess' />
    </form>;
  }
};
