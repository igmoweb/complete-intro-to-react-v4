 export default function locationReducer( state = 'Seatle, WA', action ) {
	switch ( action.type ) {
		case 'SET_LOCATION': {
			return action.payload;
		}
		default: {
			return state;
		}
	}
 }
