import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDataesThunk } from "../../actions/HandleDataActions.js";
import { AlertPlaneThunk} from "../../actions/AlertPlaneActions.js";
import { CommentItem } from "../router.jsx";

class CommentList extends Component {
	constructor (props) {
		super(props);
	}

	componentWillMount () {
		let {
			actions,
			SortState
		} = this.props;

		// 初始时候请求数据，进行初始化
		actions.getDataesThunk(0, SortState);
	}

	render () {
		let {
			ItemDataes,
			SortState,
			NowPage,
			actions,
			AllDataNum
		} = this.props;

		let  box;

		if (ItemDataes.length && AllDataNum) {
			box = (
				ItemDataes.map((ItemData, idx) => 
                    <CommentItem  
                        ItemData = {ItemData}
                        SelfIndex = {idx}
                        key = {idx}
                />)
			)
		} else if (AllDataNum) {
			box = (
				<li className="no__comment__item">
					<p>该页评论已被删除，请切换其他页</p>
				</li>
			)
		} else {
			box = (
				<li className="no__comment__item">
					<p>评论头条等你来抢！</p>
				</li>
			)
		}

		//评论头条等你来抢！
		return (
			<section className="comment__list" >
				<ul>
					{ box }
				</ul>
			</section>
		)
	} 
}

CommentList.defaultProps = {
	ItemDataes: []
}

export default connect(
	(state) => {
		return {
			NowPage: state.HandleDataReducer.NowPage,
			ItemDataes: state.CommentReducer.ItemDataes,
			AllDataNum: state.HandleDataReducer.AllDataNum,
			SortState: state.SortReducer.SortState
		}
	},

	(dispatch) => {
		return {
			actions: bindActionCreators({
				getDataesThunk,
				AlertPlaneThunk
			}, dispatch)
		}
	}
)(CommentList);