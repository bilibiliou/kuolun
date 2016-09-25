import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ChangeSortStateTask } from "../../actions/SortActions.js";
import { getDataesThunk } from "../../actions/HandleDataActions.js";

class CommentHeader extends Component {
	constructor (props) {
		super(props);

		this.sortListHandle = this.sortListHandle.bind(this);
	}

	sortListHandle (St) {
		let {
			SortState,
			NowPage,
			actions
		} = this.props;
		
		if(SortState !== St) {
			this.props.actions.ChangeSortStateTask(St);
			actions.getDataesThunk(NowPage - 1, St)
		}
	}

	render () {
		let {
			ItemDataes,
			AllDataNum
		} = this.props;

		return (
			<header className="comment__header">
				<p className="comment__header__span">评论列表 ( <span>{AllDataNum}</span> )</p>
				<p className="comment__header__btns">
					<button
					  onClick={this.sortListHandle.bind(this, "newest")}
					>最新</button>
					<button
					  onClick={this.sortListHandle.bind(this, "hottest")}
					>最热</button>
				</p>
			</header>
		)
	}
}

export default connect(
	(state) => {
		return {
			NowPage: state.HandleDataReducer.NowPage,
			SortState: state.SortReducer.SortState,
			ItemDataes: state.CommentReducer.ItemDataes,
			AllDataNum: state.HandleDataReducer.AllDataNum
		}
	},

	(dispatch) => {
		return {
			actions: bindActionCreators({
				ChangeSortStateTask,
				getDataesThunk
			}, dispatch)
		}
	}
)(CommentHeader)
