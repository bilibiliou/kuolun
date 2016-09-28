import { Types }           from "../constants/constants.js";
import { createAction }    from "redux-actions";

import { AlertPlaneThunk } from "./AlertPlaneActions.js";
import { getDataesThunk }  from "./HandleDataActions.js";


export const UpDateItemDataesTask = createAction (
    Types.UPDATE_ITEM_DATAES, (newDataes) => {
        return {
            newDataes
        }
    })

// 每次进行操作完成后，需要更新数据栈

export const CommentThunk = (page, SortState, newContent, FBIndex = -1) => {
    return (dispatch) => {
        let data = JSON.stringify(newContent);
        fetch("/saveData", {
             method: "POST",
             headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
             },
             body: `newContent=${data}&FBIndex=${FBIndex}`
         })

        .then((res) => {
            switch (true) {
                case res.ok:
                    // 发送完后跳转到首页？
                    // switch(SortState) {
                    //     case "newest": 
                    //         dispatch(getDataesThunk(0, SortState));
                    //         break;

                    //     default:
                    //         dispatch(getDataesThunk(page, SortState));
                    // }
                    dispatch(getDataesThunk(page, SortState));
                    break;
                case res.status === 404:
                    return Promise.reject("404");
                case res.status === 500:
                    return Promise.reject("500");
                default:
                    return Promise.reject();
            }
        })
        
        .catch((HttpCode) => {
            switch (HttpCode) {
                case 404:
                    return dispatch(AlertPlaneThunk("发布评论出错，请检查网络连接"));                   
                
                case 500:
                    return dispatch(AlertPlaneThunk("服务器出错，暂时无法进行评论"));

                default: 
                    return dispatch(AlertPlaneThunk("未知错误！！！"));
            }

        })
    }
}

export const DelThunk = (page, SortState, index, ParentIndex=-1) => {
    return (dispatch) => {
        fetch("/delData", {
            method: "POST",
            headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `index=${index}&ParentIndex=${ParentIndex}`
        })

        .then((res) => {
            switch (true) {
                case res.ok:
                    dispatch(getDataesThunk(page, SortState));
                    break;
                case res.status === 404:
                    return Promise.reject("404");
                case res.status === 500:
                    return Promise.reject("500");
            }
        })

        .catch((err) => {
            switch (err) {
                case "404":
                    return AlertPlaneThunk("404！ 网络不好？删除失败");
                case "500":
                    return AlertPlaneThunk("服务器出错，删除失败，请稍后再登录尝试");
            }
        })
    }
}

export const ChangeBandHiddenBoffTask = createAction (Types.CHANGE_BAND_STATE)

export const VoteUpThunk = (index, failback) => {
    return dispatch => {
        fetch("/VoteUpSomeItem", {
            method: "POST",
            headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
            },
            credentials: 'include',
            body: `index=${index}`
        })
        .then((res) => {
            if(!res.ok) {
                return Promise.reject();
            }
        })
        .catch(() => {
            failback()
            dispatch(AlertPlaneThunk("点赞操作出错，请重新尝试"));
        })

    }
} 
