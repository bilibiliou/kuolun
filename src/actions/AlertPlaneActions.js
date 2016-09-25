import { Types }           from "../constants/constants.js";
import { createAction }    from "redux-actions";
import fl                  from "fox-listener";

let foxListener = new fl(); 

const AlertPlaneTask = createAction (
    Types.POP_ALERT_PLANE, (AlertPlanePrompt, AlertPlaneState) => {
        
        return {
            AlertPlanePrompt,
            AlertPlaneState
        }
    }
)

export const TorFTask = (result) => {
    return (dispatch) => {
        foxListener.once("finishChoice", result); // 获得用户返回的结果   
    }   
}
    
export const AlertPlaneThunk = (Prompot, callback) => {
    return (dispatch) => {
        dispatch(AlertPlaneTask(Prompot, 1));  // 弹出对话框

        foxListener.subscribe("finishChoice", (result) => {
            if(result) {        // 如果结果为 是 执行回调函数
                callback && callback();
            }
            dispatch(AlertPlaneTask("", 0));   // 关闭对话框         
        })
    }
}
