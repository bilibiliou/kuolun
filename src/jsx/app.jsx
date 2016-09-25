import React                 from "react";
import { render }            from "react-dom";
import { Provider, connect } from "react-redux";
import { configureStore }    from "../store/configure.js";

/*** components ***/
import {
	CommentWrap
} from "./router.jsx";

const store = configureStore();

render (
    <Provider store={store}>
        <CommentWrap />
    </Provider>,
	document.querySelector(".demo"),
	()=> console.log(">>>>>>　页面渲染已经完成　<<<<<<")
)