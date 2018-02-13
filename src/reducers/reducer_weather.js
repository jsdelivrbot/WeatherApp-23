import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
	console.log('action received: ', action);
	switch (action.type){
		case FETCH_WEATHER:
			// return state.concat( [action.payload.data] ); es5, below es6
			return [ action.payload.data, ...state];
			//concat nie push -> doesn't change existing array, creates new
			// that add this
	}

	return state;
}