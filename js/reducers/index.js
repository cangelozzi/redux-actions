var actions = require('../actions/index');

var initialRepositoryState = [];

var repositoryReducer = function(state, action) {
    state = state || initialRepositoryState;

    if (action.type === actions.GENERATE_RANDOM_NUMBER){
      return state.concat({
        number: action.number,
        guess: null
      });
    }
    else if (action.type === actions.GUESS_NUMBER) {
      return state.concat({
        number: action.number,
        guess: action.guess
      });
    }

    return state;
};

exports.repositoryReducer = repositoryReducer;
