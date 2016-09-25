import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getDataesThunk } from "../../actions/HandleDataActions.js";


class CommentPagination extends Component {
	constructor (props) {
		super(props);

		this.pagination = this.pagination.bind(this);
	}

	pagination () {
		let {
			AllDataNum,
			PaginationNum,
			PaginationLimit,
			NowPage
		} = this.props,
		halfNum = ~~(PaginationLimit/2),
		result = []

		switch (true) {
			case (PaginationNum < PaginationLimit):
				for (let i = 1 ; i <= PaginationNum; i++) {
					result.push(i);
				}
				return result; 

			case (NowPage <= halfNum+1):
				for (let i = 1 ; i <= PaginationLimit; i++) {
	 				result.push(i);
	 			}

	 			result.push("尾页");
	 			return result;

	 		case (NowPage > halfNum+1 && NowPage < (PaginationNum - halfNum)): 
	 			result.push("首页");

	 			for (let i = NowPage-halfNum; i <= NowPage+halfNum; i++) {
	 				result.push(i);
	 			}

	 			result.push("尾页");
	 			return result; 
	 		case (NowPage >= (PaginationNum - halfNum)):
	 			result.push("首页");

	 			for(let i = (PaginationNum - PaginationLimit)+1; i <= PaginationNum; i++) {
	 				result.push(i);
	 			}

	 		return result;
		}
	}

	render () {
		let ItemsMap = this.pagination();

		return (
			<ol className="comment__pagination">
				{
					ItemsMap.map((value, idx)=>
						<PaginationsItem  
							order={value} 
							key={idx}
							active = {
								this.props.NowPage === value ?
								1 : 0 
							}

							{...this.props}
						/>
					)
				}
			</ol>
		)
	}
}

class PaginationsItem extends Component {
	constructor (props) {
		super(props);

		this.handleChangePage.bind(this);
	}

	handleChangePage (order) {
		let {
			actions,
			AllDataNum,
			PaginationNum,
			SortState
		} = this.props;


		switch (true) {
			case (order === "首页"):
				 actions.getDataesThunk(0, SortState);
				 break;
			case (order === "尾页"):
				actions.getDataesThunk(PaginationNum - 1, SortState);
				break;
			default:
				actions.getDataesThunk(parseInt(order) - 1, SortState) 
		}		
	}

	render () {
		let {
			order,
			active
		} = this.props;

		return (
			<li>
				<div 
					className = {
						(active) && "active"
					}
					
					onClick = {
						this.handleChangePage.bind(this, order)
					}
				>
					{order}				
				</div>
			</li>
		)
	}
}

export default connect(
	(state) => {
		return {
			SortState: state.SortReducer.SortState,
			AllDataNum: state.HandleDataReducer.AllDataNum,  // 总数据的数目
			NowPage: state.HandleDataReducer.NowPage, // 当前页数
			PaginationNum: state.HandleDataReducer.PaginationNum, // 分页数
			PaginationLimit: state.HandleDataReducer.PaginationLimit // 分页限制数 
		}
	},

	(dispatch) => {
		return {
			actions: bindActionCreators({
				getDataesThunk
			}, dispatch)
		}
	}
)(CommentPagination);