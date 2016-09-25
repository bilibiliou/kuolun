import { Types } from "../constants/constants.js";
const initialState = {
    SortState: "newest"
}

const SortReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SORT_STATE_CHANGE:
            return Object.assign({}, state, {
                SortState: action.payload.SortState
            })

        default: 
            return state;
    }   
}

export default SortReducer;