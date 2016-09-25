import { Types }         from "../constants/constants.js";

let initialState = {
    PageCommentsNum: 6, // 每页10条评论
    PaginationLimit: 9,  // 每次展现9页页码
    AllDataNum: 0,       // 评论总数
    PaginationNum: 0,    // 页码数
    NowPage: 1           // 当前页码
}

const HandleDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.UPDATE_GLOBAL_DATA_INFO:
            let temp = 0,
                divide = ~~(action.payload.AllDataNum / state.PageCommentsNum),
                mod = action.payload.AllDataNum % state.PageCommentsNum

            temp = (!mod) ? divide : (divide + 1);


            return Object.assign({}, state, { 
                AllDataNum: action.payload.AllDataNum,
                PaginationNum: temp,
                NowPage: action.payload.NowPage
            })
        default:
            return state;
    }
   
}

export default HandleDataReducer;
