import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import 	marked 	   from "marked";
import  hljs       from "highlight.js";
import { bindActionCreators } from "redux";
import { CommentThunk } from "../../actions/CommentActions.js";
import { LoginTableStateTask } from "../../actions/LoginActions.js";
import { AlertPlaneThunk } from "../../actions/AlertPlaneActions.js";

class CommentFeedback extends Component {
	constructor (props) {
		super(props);

		this.state = {
			editorCotent: "",
			editerHeight: 150,
			choiceType: "",
			BandBoff: 1
		}

		this.reSet = this.reSet.bind(this);
		this.sendComment = this.sendComment.bind(this);
		this.editDefalut = this.editDefalut.bind(this);
		this.handleBandState = this.handleBandState.bind(this);
		this.editorResizeHandle = this.editorResizeHandle.bind(this);
		this.MarkdownHandle = this.MarkdownHandle.bind(this);
	}

	editDefalut (ev) {
		let editerWrap     = this.refs["editer-wrap"]

		if (ev.keyCode === 9) {
			let aL = editerWrap.selectionEnd;
			editerWrap.value = editerWrap.value.splice(aL-1, 0, "\t");
			editerWrap.setSelectionRange(aL+1,aL+1); // 设置光标位置

			ev.preventDefault();
		}

		if (ev.ctrlKey && ev.keyCode === 13) {
			// 提交	
			this.sendComment();
		}
	}

	FormatHTML (value) {
		let html = value.trim(),
			renderer = new marked.Renderer();

		marked.setOptions({
			highlight: (code) => {
				return hljs.highlightAuto(code).value;
			}
		})

		renderer.heading = (text, level) => {
			if(level === 1) {

			let colors = text.match(/(\#\w+)/g),
				content = text.match(/(.+) \#/)[1]
				return(`<h1
					class="text-effect-basic"
					style="background-image: linear-gradient(
							-75deg,
							${colors[0]},
							${colors[1]} 25%,
							${colors[0]} 50%,
							${colors[1]} 75%,
							${colors[0]}
						)" 
				>${content}</h1>`)
				

			} else {
				return `<h${level}>${text}</h${level}>`
			}
		}

		return marked( html, { renderer });
	}

	handleBandState (BoffType) {
		let editerWrap = this.refs["editer-wrap"];

		(editerWrap.value === "") && (this.setState({
			BandBoff: BoffType
		}));

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
		  
		  this.handleBandState(0);
		  callback && callback(ev, editerWrap);
		  
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
			MainFeedBackBox
		} = this.props,
		choice_list,
		editerWrap = this.refs["editer-wrap"],
		colors = [
			[`#BE93C5`,`#7BC6CC`],
			[`#4ECDC4`,`#556270`],
			[`#A1FFCE`,`#FAFFD1`],
			[`#ff6e7f`,`#bfe9ff`]
		];

		switch (this.state.choiceType) {
			case "h1_list":
			    choice_list = (
			    	<div className="syntaxs__sub-list"
			    		 onClick={(ev) => {
			    		 	if(ev.target.dataset.btnId !== undefined) {
			    		 		let	id = parseInt(ev.target.dataset.btnId),
									len = editerWrap.value.length;

			    		 		editerWrap.value += 
			    		 		(id != 0) ?
			    		 		`\n# 大标题 # [${colors[id-1][0]}|${colors[id-1][1]}] \n` :
								"\n# 大标题 \n"

	      						editerWrap.setSelectionRange(len+3,len+6);
			    		 	}	    		 	
			    		 		
			    		 	editerWrap.focus();
							ev.preventDefault();
							ev.stopPropagation();
			    		 }}
			    	>
			    		<div
			    			className="choice-btn"
			    			data-btn-id={0}
							style={{
								background: `#7c795d`
							}}
							title="原色"
						>
						</div>
						{
							colors.map((value,idx) => {
								return (<div 
			    					className="choice-btn"
									key={idx}
									data-btn-id={idx+1}
									style={{
										background: `linear-gradient(
											-75deg,
											${value[0]} 0,
											${value[1]} 100%
										)`
									}}
								>
								</div>)
							})
						}
					</div>
			    )
				break;
			case "img_list":
				choice_list = (
					<div className="syntaxs__sub-list">
						<input type="text" placeholder="图片alt" ref="alt-input" />
						<input type="text" placeholder="图片地址(url)" ref="img-url-input"/>
						<button 
							className="insert"
							onClick={(ev) => {
								let altInputValue = this.refs["alt-input"].value,
									imgUrlInputValue = this.refs["img-url-input"].value

								this.MarkdownHandle.call(this, ev, (ev, editerWrap) => {
      								editerWrap.value += `![${altInputValue}](${imgUrlInputValue})`;
								})
							}}
						>插入图片</button>
						
					</div>
				)
				break;
			case "a_link_list":
				choice_list = (
					<div className="syntaxs__sub-list">
						<input type="text" placeholder="链接名" ref="link-name-input" />
						<input type="text" placeholder="链接地址(url)" ref="link-url-input"/>
						<button 
							className="insert"
							onClick={(ev) => {
								let LinkNameInput = this.refs["link-name-input"].value,
									LinkUrlInput = this.refs["link-url-input"].value

								this.MarkdownHandle.call(this, ev, (ev, editerWrap) => {
	  								editerWrap.value += `[${LinkNameInput}](${LinkUrlInput})`;
								})
							}}
						>插入链接</button>
					</div>
				)
				
				break; 
			default: 
				choice_list = null
		}
		
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
										let len = editerWrap.value.length;
	      								editerWrap.setSelectionRange(len - 7, len-3);
									})
								}}
							>
							</li>
							<li className="italic" 
								title="斜体"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "_ 斜体文本 _";
										let len = editerWrap.value.length;
	      								editerWrap.setSelectionRange(len - 6, len-2);
									})
								}}
							>
							</li>
							<li className="a-link" 
								title="A链接"
								onClick={(ev) => {
									this.MarkdownHandle.call(this, ev, (ev, editerWrap) => {
	      								if(this.state.choiceType === "a_link_list") {
	      									this.setState({
												choiceType: ""
											})
	      								} else {
	      									this.setState({
												choiceType: "a_link_list"
											})	
	      								}					
									})
								}}
							>
							</li>
							<li className="image" 
								title="引入图片"
								onClick={(ev) => {
									this.MarkdownHandle.call(this, ev, (ev, editerWrap) => {
	      								if(this.state.choiceType === "img_list") {
	      									this.setState({
												choiceType: ""
											})
	      								} else {
	      									this.setState({
												choiceType: "img_list"
											})	
	      								}					
									})
								}}
							></li>
							<li className="table" title="选择表格"></li>
							<li className="blockquote-block" 
								title="引用"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "> 引用内容";
	      								let len = editerWrap.value.length;
	      								editerWrap.setSelectionRange(len - 4, len);
									})
								}}
							></li>
							<li className="o-list" 
								title="有序列表"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "\n1. 例1\n2. 例2\n3. 例3";
									})
								}}
							>
							</li>
							<li className="u-list" 
								title="无序列表"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "\n* 例1\n* 例2\n* 例3";
									})
								}}
							></li>
							<li className="h1-tag" 
								title="大标题"
								onClick={(ev) => {
									this.MarkdownHandle.call(this, ev, (ev, editerWrap) => {
	      								if(this.state.choiceType === "h1_list") {
	      									this.setState({
												choiceType: ""
											})
	      								} else {
	      									this.setState({
												choiceType: "h1_list"
											})	
	      								}					
									})
								}}
							></li>
							<li className="h2-tag" 
								title="小标题"
								onClick={(ev) => {
									this.MarkdownHandle.call(null, ev, (ev, editerWrap) => {
	      								let len = editerWrap.value.length;
	      								editerWrap.value += "\n## 小标题\n";
	      								editerWrap.setSelectionRange(len + 4,len + 7);
									})
								}}
							>
							</li>
						</ul>
						
						{ choice_list }
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

							 onBlur={/*
							 	MainFeedBackBox ?
							 	this.handleBandState.bind(this,1) :
							 	null*/null
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
							MainFeedBackBox && this.state.BandBoff ?
							(
								<div className="comment__feedback__mask"
									 onClick = {
									 	() => {
											let editerWrap = this.refs["editer-wrap"]
											this.handleBandState(0);
									 		editerWrap.focus();
									 	}}
									 	
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
								title="点击 & Ctrl+Enter"
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
				LoginTableStateTask
			}, dispatch)
		}
	}
)(CommentFeedback);