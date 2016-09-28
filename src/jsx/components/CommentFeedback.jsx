import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CommentThunk, ChangeBandHiddenBoffTask } from "../../actions/CommentActions.js";
import { LoginTableStateTask } from "../../actions/LoginActions.js";
import { AlertPlaneThunk } from "../../actions/AlertPlaneActions.js";

class CommentFeedback extends Component {
	constructor (props) {
		super(props);

		this.reSet = this.reSet.bind(this);
		this.sendComment = this.sendComment.bind(this);
		this.editDefalut = this.editDefalut.bind(this);
		this.handleBandState = this.handleBandState.bind(this);
	}

	editDefalut (ev) {
		let {
			target,
			keyCode
		} = ev;


		if (keyCode === 9) {
			let selObj = window.getSelection(),
				{
					anchorOffset
				} = selObj;
			
			target.innerHTML = target.innerHTML.splice(anchorOffset - 1,0,"  ");

			let len = target.innerHTML.length;
			
			ev.preventDefault();

			
			function setCaretPosition(ctrl, pos){//设置光标位置函数 
				if(ctrl.setSelectionRange) { 
					ctrl.focus(); 
					ctrl.setSelectionRange(pos,pos); 
				} else if (ctrl.createTextRange) {
					let range = ctrl.createTextRange(); 
					range.collapse(true); 
					range.moveEnd('character', pos); 
					range.moveStart('character', pos); 
					range.select(); 
				} 
			}
		}

		if (ev.ctrlKey && keyCode === 13) {
			// 提交	
			this.sendComment();
		}
	}

	FormatHTML (value) {
		console.log(">>>>>",value)
		value = value
		         .replace(/\<\/div\>/g , "")
		         .replace(/\<div\>/g, "\n")

		return value
	}

	sendComment (ev) {
		let {
			actions,
			userInfo,
			ItemDataes,
			loginTableState,
			AllDataNum,
			
			// 判断是哪个需要评论
			CommentMainTask,
			CommentFeedBackTask,
			CommentSubFeedBackTask,
			
			ParentIndexOnDb,  // 父结点在数据库中的索引
			ParentIndex,
			BeFeedIndex = BeFeedIndex || -1,

			NowPage,
			SortState
		} = this.props,
		
		oEditerWrap = this.refs["editer-wrap"],
		oDate = new Date(),
		[year , month, day]  = oDate
		.toLocaleDateString()
		.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/).slice(1, 4),
		
		commentContent = {
	  		"avatar_url": userInfo.userAvatar,
	  		"author_name": userInfo.userName,
	  		"author_email": userInfo.userEmail, 
	  		"publish_time": `${year}-${month}-${day}|${oDate.getTime()}`,
	  		"publish_content": this.FormatHTML(oEditerWrap.innerHTML),
	  		"vote_up": 0,
	  		"commentAuthor": userInfo.commentAuthor,
	  		"ForBidFeedBack" : CommentSubFeedBackTask ? true : false
		}

		console.log(commentContent.publish_content)

		if (!!userInfo.userEmail) {

			if (!oEditerWrap.innerHTML) {
				return;
			}
			
			let arr = [...ItemDataes];

			// 选择 发送主推送，还是回复推送
			// 在这里就处理好数据
			switch(true) {
				case CommentMainTask:
					commentContent["index"] =  AllDataNum;
					commentContent["FeedBack"] = [];

					// arr.push(commentContent);
					actions.CommentThunk(NowPage - 1, SortState, commentContent);
					break;

				case CommentFeedBackTask:
				case CommentSubFeedBackTask:

					commentContent["FeedBackIndex"] =  ItemDataes[ParentIndex].FeedBack.length
					commentContent["BeFeedIndex"] = BeFeedIndex;

					// arr[ParentIndex].FeedBack.push(commentContent);
					actions.CommentThunk(NowPage - 1, SortState, commentContent, ParentIndexOnDb);
					break;
			}

			
			oEditerWrap.innerHTML = "";
		} else {
			actions.LoginTableStateTask();
		}
	}

	reSet (ev) {
		let editerWrap = this.refs["editer-wrap"];
		
		if(editerWrap.innerHTML) {
			this.props.actions.AlertPlaneThunk("您确定需要进行文本重置？", function () {
				
				editerWrap.innerHTML = "";
				editerWrap.focus();
			}.bind(this))
		}
	}

	handleBandState (ev) {
		let editerWrap = this.refs["editer-wrap"];

		if (ev.type === "click") {
			editerWrap.focus();
		}
		(editerWrap.innerHTML === "") && (this.props.actions.ChangeBandHiddenBoffTask()) 
	}

	render () {
		let {
			actions,
			MainFeedBackBox,
			BandBoff
		} = this.props;

		return (
				<div className="comment__feedback__box">
					<div className="comment__feedback--edit" 
						 contentEditable="true"
						 name="feedback_content" 
						 placeholder="说点什么吧..."
						 aria-label="说点什么吧..."
						 onKeyDown={this.editDefalut} 
						 ref="editer-wrap"

						 onBlur={
						 	MainFeedBackBox ?
						 	this.handleBandState :
						 	null
						 }
					>
					
					</div>
					
					{
						MainFeedBackBox && BandBoff ?
						(
							<div className="comment__feedback__mask"
								 onClick = {this.handleBandState}
							>
								<p className="comment__feedback__mask--title">阔论</p>
								<p className="comment__feedback__mask--pinyin">KUO LUN</p>
							</div>
						) : null

					}				
					<div className="comment__feedback--btns">
						<button className="feedback--btns__reset"
								onClick={this.reSet}
						>
						重置
						</button>
						<button className="feedback--btns__comment"
								onClick={this.sendComment}
						>
						评论一下
						</button>
					</div>
				</div>
		)
	}
}

export default connect(
	(state) => {
		return {
			loginTableState: state.LoginReducer.loginTableState,
			userInfo: state.LoginReducer.userInfo,
			ItemDataes: state.CommentReducer.ItemDataes,
			BandBoff: state.CommentReducer.BandBoff,
			AllDataNum: state.HandleDataReducer.AllDataNum,
			SortState: state.SortReducer.SortState,
			NowPage: state.HandleDataReducer.NowPage
		}
	},

	(dispatch) => {
		return {
			actions: bindActionCreators({
				AlertPlaneThunk,
				CommentThunk,
				LoginTableStateTask,
				ChangeBandHiddenBoffTask
			}, dispatch)
		}
	}
)(CommentFeedback);