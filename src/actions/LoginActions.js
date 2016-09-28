import { Types }           from "../constants/constants.js";
import { createAction }    from "redux-actions";
import { AlertPlaneThunk } from "./AlertPlaneActions.js";

export const LoginTableStateTask = createAction (Types.CHANGE_LOGIN_TABLE_STATE);

export const UpDateUserInfoTask = createAction (
    Types.UPDATE_USER_INFO, (newInfo) => {
        return {
            newInfo
        }
    })

export const LoginInThunk = (newInfo) => {

    return dispatch => {
        fetch("/setSession", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(newInfo)
        })
          .then((res) => {
            switch (true) {
                case res.ok:
                    dispatch(UpDateUserInfoTask(newInfo))
                    break;
                case res.status === 404:
                    return Promise.reject(404);
            }
          })
          .catch((errCode) => {
            if(errCode) {
                AlertPlaneThunk(`登录失败， ${errCode} 错误`);
            } else {
                AlertPlaneThunk(`登录失败， 未知错误`);
            }
          })
    }
}

export const LoginOutThunk = () => {

    return dispatch => {
    
        fetch("/delSession", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            },
            credentials: 'include'
        })
          .then((res) => {
            switch (true) {
                case res.ok:
                    dispatch(UpDateUserInfoTask({}))
                    break;
                case res.status === 404:
                    return Promise.reject(404);
            }
          })
          .catch((errCode) => {
            if(errCode) {
                AlertPlaneThunk(`登出失败， ${errCode} 错误`);
            } else {
                AlertPlaneThunk(`登出失败， 未知错误`);
            }
          })
    
    }
}

export const checkLoginThunk = () => {
    return (dispatch) => {
        fetch("/checkLogin", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            },
            credentials: 'include'
        })
         .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject();
            }
         })
         .catch(() => {
           dispatch(UpDateUserInfoTask(userInfo));
         })
         .then((value) => {
            dispatch(UpDateUserInfoTask(JSON.parse(value)))
         })
    }
}


