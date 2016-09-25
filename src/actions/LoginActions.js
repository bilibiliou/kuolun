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
                 "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `newInfo=${JSON.stringify(newInfo)}`
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

export const LoginOutTask = createAction (Types.LOGIN_OUT)