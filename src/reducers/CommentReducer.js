import { Types }         from "../constants/constants.js";

const [day, year, month, date] = new Date()
		.toTimeString()
		.match(/(\d{2})\:(\d{2})\:(\d{2})/).slice(1,4),

	  initialState = {
		ItemDataes: [],
		BandBoff: 1	
	  };


const CommentReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.UPDATE_ITEM_DATAES:

    		return Object.assign({}, state, { ItemDataes: action.payload.newDataes })
		
		case Types.CHANGE_BAND_STATE:
			if (action.payload.BandBoffState !== undefined) {
				return Object.assign({}, state, { BandBoff: action.payload.BandBoffState });
			} else {
				return Object.assign({}, state, { BandBoff: state.BandBoff ^ 1 });
			}

		default:
			return state;
	}
}

export default CommentReducer;