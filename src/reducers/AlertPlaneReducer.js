import { Types }         from "../constants/constants.js";

const initialState = {
    AlertPlanePrompt: "",
    AlertPlaneState: 0
}

const AlertPlaneReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.POP_ALERT_PLANE:
            return Object.assign({}, state, {
                AlertPlanePrompt: action.payload.AlertPlanePrompt,
                AlertPlaneState: action.payload.AlertPlaneState
            })

        default: 
            return state;
    }
}

export default AlertPlaneReducer;