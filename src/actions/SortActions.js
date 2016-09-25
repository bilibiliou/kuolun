import { Types }           from "../constants/constants.js";
import { createAction }    from "redux-actions";

export const ChangeSortStateTask = createAction (
    Types.SORT_STATE_CHANGE, (SortState) => {
        return {
            SortState
        }
    })

