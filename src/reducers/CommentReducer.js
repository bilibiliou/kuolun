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

		default:
			return state;
	}
}

export default CommentReducer;