import { Types }           from "../constants/constants.js";
import { createAction }    from "redux-actions";
import { AlertPlaneThunk } from "./AlertPlaneActions.js";
import { UpDateItemDataesTask } from "./CommentActions";

export const  UpDateDataInfoTask = createAction(
    Types.UPDATE_GLOBAL_DATA_INFO, (AllDataNum, NowPage) => {
        return {
            AllDataNum,
            NowPage
        }
    })

export const getDataesThunk = (page, SortState) => {
    return (dispatch) => {
        fetch("/resDataes", {
            method: "POST",
            headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
            },
            credentials: 'include',
            body: `whichpage=${page}&SortState=${SortState}`
        })
        .then((res) => {                
            switch (true) {
                case res.ok: 
                    return res.json();
                case res.status === 404:
                    return Promise.reject("404");
                case res.status === 500:
                    return Promise.reject("500");
            }
        })
        .catch((err) => {
            switch (err) {
                case "404":
                    return AlertPlaneThunk("404！ 网络不好？无法加载全部评论");
                case "500":
                    return AlertPlaneThunk("服务器出错，请稍后再登录尝试");
            }
        })
        .then((value) => {
            let Dataes = JSON.parse(value);
            
            dispatch(UpDateDataInfoTask(Dataes.allLen, page+1));
            dispatch(UpDateItemDataesTask(Dataes.Data));
        })
    }
}

