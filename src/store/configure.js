import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import root from "../reducers/index.js";

// store 根据导入的reduce 生成 state树
export const configureStore = () => {
    const store = createStore(
        root,
        window.devToolsExtension &&  window.devToolsExtension(),
        applyMiddleware(thunk)
    )

    return store;
}
