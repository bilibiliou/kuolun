import { Types }         from "../constants/constants.js";
import { getCookie,setCookie,delCookie } from "../js/util.js";

const initialState = {
    userInfo: {
        "userName": getCookie("user-name") ? 
                    getCookie("user-name")[1] : 
                    "",
        "userEmail": getCookie("user-email") ? 
                     getCookie("user-email")[1] : 
                     "",
        "userAvatar": "/img/default-avatar.png",
        "commentAuthor": "游客"
    },
    loginTableState: true
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_LOGIN_TABLE_STATE:
            let toggleState = !state.loginTableState;
            return Object.assign({}, state, { loginTableState: toggleState })

        case Types.UPDATE_USER_INFO:
            setCookie("user-name", action.payload.newInfo.userName, 30);
            setCookie("user-email", action.payload.newInfo.userEmail, 30);
            
            return Object.assign({}, state, {
                userInfo: action.payload.newInfo
            })

        case Types.LOGIN_OUT:
            delCookie("user-name");
            delCookie("user-email");
            return Object.assign({}, state, {
                userInfo: {},
                loginTableState: !state.loginTableState
            })

        default: 
            return state;
    }
}

export default LoginReducer;