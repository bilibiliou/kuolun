import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { markdown } from "markdown";
import { $ } from "../../js/util.js";
import { bindActionCreators } from "redux";
import { CommentThunk, ChangeBandHiddenBoffTask } from "../../actions/CommentActions.js";
import { LoginTableStateTask } from "../../actions/LoginActions.js";
import { AlertPlaneThunk } from "../../actions/AlertPlaneActions.js";

class CommentFeedback extends Component {
	constructor (props) {
		super(props);

		this.state = {
			editorCotent: "",
			editerHeight: 150
		}

		this.reSet = this.reSet.bind(this);
		this.sendComment = this.sendComment.bind(this);
		this.editDefalut = this.editDefalut.bind(this);
		this.handleBandState = this.handleBandState.bind(this);
		this.editorResizeHandle = this.editorResizeHandle.bind(this);
		this.MarkdownHandle = this.MarkdownHandle.bind(this);
	}

	editDefalut (ev) {
		let 
			editerWrap     = this.refs["editer-wrap"]

		if (ev.keyCode === 9) {
			// editerWrap.value += "\t";
			let sel, range;
			// if (window.getSelection) {
			// 	sel = window.getSelection();

			// 	range = sel.getRangeAt(0);
			// 	console.log(sel, range)
			// 	range.insertNode( document.createTextNode("\t") )

			// }
			ev.preventDefault();
		}

		if (ev.ctrlKey && ev.keyCode === 13) {
			// 提交	
			this.sendComment();
		}
	}

	FormatHTML (value) {
		let html = value.trim()
				   .replace(/\n/g, "\n\n")  // 两个换行符号才能被转义为一个 p tag


		return markdown.toHTML(html, "Maruku");
	}

	handleBandState (ev) {
		let editerWrap = this.refs["editer-wrap"];

		if (ev.type === "click") {
			editerWrap.focus();
		}

		(editerWrap.value === "") && (this.props.actions.ChangeBandHiddenBoffTask()) 
	}

	editorResizeHandle ($event) {
		console.log($event);
		$event.target.addEventListener("mousedown", (ev) => {
			let $top = ev.clientY 
				

			// document.addEventListener("mousemove", (ev) => {

			// })

			// document.addEventListener("mouseup", function () {
	  //           document.removeEventListener("mousemove");
	  //           $event.target.removeEventListener("mouseup");
	  //       });
		})
	}

	MarkdownHandle (ev, callback) {
		let editerWrap     = this.refs["editer-wrap"]

		  callback && callback(ev, editerWrap)
		  this.props.actions.ChangeBandHiddenBoffTask(0);
		  editerWrap.focus();
		  ev.preventDefault();
		  ev.stopPropagation();
	}

	reSet (ev) {
		let editerWrap = this.refs["editer-wrap"];
		
		if(editerWrap.value) {
			this.props.actions.AlertPlaneThunk("您确定需要进行文本重置？", function () {
				
				editerWrap.value = "";
				editerWrap.focus();
			}.bind(this))
		}
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
	  		"publish_content": this.FormatHTML(oEditerWrap.value),
	  		"vote_up": 0,
	  		"commentAuthor": userInfo.commentAuthor,
	  		"ForBidFeedBack" : CommentSubFeedBackTask ? true : false
		}

		console.log(commentContent.publish_content)

		if (!!userInfo.userEmail) {

			if (!oEditerWrap.value) {
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

			
			oEditerWrap.value = "";
		} else {
			actions.LoginTableStateTask();
		}
	}

	render () {
		let {
			actions,
			MainFeedBackBox,
			BandBoff
		} = this.props;

		return (
				<div className="comment__feedback__box">
					<div className ="comment__feedback__box__syntaxs">
						<ul className="syntaxs__list">
							<li className="emoji-list" title="表情列表"></li>
							<li className="bold" 
								title="加粗"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
										editerWrap.value += "** 加粗文本 **";
									})
								}}
							>
							</li>
							<li className="italic" 
								title="斜体"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "_ 斜体文本 _";
									})
								}}
							>
							</li>
							<li className="a-link" 
								title="A链接"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "[链接名](网址)";
									})
								}}
							>
							</li>
							<li className="image" 
								title="引入图片"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "![图片alt](图片地址)";
									})
								}}
							></li>
							<li className="table" title="选择表格"></li>
							<li className="blockquote-block" title="引用"></li>
							<li className="o-list" 
								title="有序列表"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "\n1. 例1\n2. 例2\n3. 例3\n";
									})
								}}
							>
							</li>
							<li className="u-list" 
								title="无序列表"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "\n* 例1\n* 例2\n* 例3\n";
									})
								}}
							></li>
							<li className="h1-tag" title="大标题"></li>
							<li className="h2-tag" 
								title="小标题"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "\n## 小标题\n";
									})
								}}
							>
							</li>
						</ul>
						
						{/*<div className="syntaxs__sub-list">
							<div
								style={{
									background: `linear-gradient(
										-75deg,
										#BE93C5 0,
										#7BC6CC 100%
									)`
								}}
							>
							</div>
						</div>*/}
					</div>

					<section className="comment__feedback__box__wrap">
						<textarea className="comment__feedback--edit" 
							 name="feedback_content" 
							 placeholder="说点什么吧..."
							 aria-label="说点什么吧..."
							 onKeyDown={this.editDefalut} 
							 ref="editer-wrap"
							 style = {{
							 	height: this.state.editerHeight
							 }}

							 onBlur={
							 	MainFeedBackBox ?
							 	this.handleBandState :
							 	null
							 }
						>
						</textarea>
						
						<div className="editor__resize__wrap">
							<a className="editor__resize" 
							   href="javascript:;"
							   title="拖拽改变评论框大小"
							   onClick={this.editorResizeHandle}
							 ></a>
						</div>
						

						{
							MainFeedBackBox && BandBoff ?
							(
								<div className="comment__feedback__mask"
									 onClick = {this.handleBandState}
									 style = {{
									 	height: this.state.editerHeight - 1
									 }}
								>
									<p className="comment__feedback__mask--title">阔论</p>
									<p className="comment__feedback__mask--pinyin">KUO LUN</p>
								</div>
							) : null

						}				
					</section>

					
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