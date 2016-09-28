import { Types }         from "../constants/constants.js";
import { getCookie,setCookie,delCookie } from "../js/util.js";

const initialState = {
    userInfo: {},
    loginTableState: true
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_LOGIN_TABLE_STATE:
            let toggleState = !state.loginTableState;
            return Object.assign({}, state, { loginTableState: toggleState })

        case Types.UPDATE_USER_INFO:
            // setCookie("user-name", action.payload.newInfo.userName, 7);
            // setCookie("user-email", action.payload.newInfo.userEmail, 7);
            
            return Object.assign({}, state, {
                userInfo: action.payload.newInfo
            })

        default: 
            return state;
    }
}

export default LoginReducer;