import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import 	marked 	   from "marked";
import  hljs       from "highlight.js";
import { getPostion } from "../../js/util.js";
import { bindActionCreators } from "redux";
import { CommentThunk } from "../../actions/CommentActions.js";
import { LoginTableStateTask } from "../../actions/LoginActions.js";
import { AlertPlaneThunk } from "../../actions/AlertPlaneActions.js";
import { DropList } from "../router.jsx"
class CommentFeedback extends Component {
	constructor (props) {
		super(props);

		let initEditerHeight = 0;
		if(this.props.MainFeedBackBox) {
			initEditerHeight = 150;
		} else {
			initEditerHeight = 30;
		}
		this.state = {
			editorCotent: "",
			editerHeight: initEditerHeight,
			choiceType: "",
			BandBoff: 1,
			codeListBeChoice: "请选择代码种类",
			tableChoiceLock: 0,
			cTableX: 1,
			cTableY: 1
		}

		this.reSet = this.reSet.bind(this);
		this.sendComment = this.sendComment.bind(this);
		this.editDefalut = this.editDefalut.bind(this);
		this.handleBandState = this.handleBandState.bind(this);
		this.mdown = this.mdown.bind(this);
		this.SyntaxsListHandle = this.SyntaxsListHandle.bind(this);
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

		renderer.link = (url, level, text) => {
			return (`<a href="${url}" target="_blank">${text}</a>`)
		}

		return marked( html, { renderer });
	}

	handleBandState (BoffType) {
		let editerWrap = this.refs["editer-wrap"];

		(editerWrap.value === "") && (this.setState({
			BandBoff: BoffType
		}));

	}

	SyntaxsListHandle (ev, callback) {
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

	mdown (ev, callback) {
		let $self = this,
			oTarget = ev.target,
			currentTop = oTarget.offsetTop,
			$top = ev.clientY - oTarget.offsetTop,
			$left = ev.clientY - oTarget.offsetLeft

		let mmove = (ev) => {
			let dragTop = ev.clientY - $top,
				dragLeft = ev.clientX - $left

			callback && callback([
				dragTop,
				dragLeft
			]);
			
		}, mup = () => {
			document.removeEventListener("mousemove", mmove);
			oTarget.removeEventListener("mouseup", mup);
		}

		document.addEventListener("mousemove", mmove)
		document.addEventListener("mouseup", mup);
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
		],
		codeTypeList = [
			"c","c++","c#",
			"java","javascript","go","python","php","ruby","lisp","nginx","objective-c",
			"http","json","sql",
			"html","xml",
			"css","less","scss","stylus"
		],
		tableSizeX = 5,
		tableSizeY = 5,
		tdSize = 31, //( x === y)
		tablePosition = getPostion(this.refs["table-matrix"]),
		tableRow   = [],
		tableCol   = []


		for(let i = 0; i<tableSizeX;i++) {
			tableCol = []
			for(let j = 0; j<tableSizeY; j++) {
				if( (i+1 <= this.state.cTableY) && (j+1 <= this.state.cTableX)) {
					tableCol.push(<td 
						style={{
							background: "#f5f5f5"
						}}
						key={j}></td>);
				} else {
					tableCol.push(<td key={j}></td>);
				}
			}
			
			tableRow.push(
			<tr key={i}>
				{tableCol}
			</tr>); 
		}

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
								let altInput = this.refs["alt-input"],
									imgUrlInput = this.refs["img-url-input"]

								this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
      								editerWrap.value += `![${altInput.value}](${imgUrlInput.value})`;
								})

								altInput.value = "";
								imgUrlInput.value = "";
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
								let LinkNameInput = this.refs["link-name-input"],
									LinkUrlInput = this.refs["link-url-input"]

								this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
	  								editerWrap.value += `[${LinkNameInput.value}](${LinkUrlInput.value})`;
								})

								LinkNameInput.value = "";
								LinkUrlInput.value = "";
							}}
						>插入链接</button>
					</div>
				)
				break;
			case "code_block_list":
				choice_list = (
					<div className="syntaxs__sub-list">
						<DropList 
							dataList={codeTypeList}
							initPrompt={this.state.codeListBeChoice}
							returnDataCallback={(data)=> {
								this.setState({
									codeListBeChoice: data
								})
							}}
						/>

						<button 
			                className="insert"
			                
			                onClick={(ev) => {
			                    let codeTypeSelection = this.refs["code-type-selection"];
			                    this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
			                        if (this.state.codeListBeChoice === "请选择代码种类") {
			                            return;
			                        } else {
			                            editerWrap.value += "\n```"+this.state.codeListBeChoice+"\n代码内容\n```\n";
			                            let len = editerWrap.value.length;
			                            editerWrap.setSelectionRange(len-9,len-5)
			                            this.setState({
			                                codeListBeChoice: "请选择代码种类"
			                            })
			                        }
			                    })
			                }}
			            >插入代码</button>
					</div>
				)
				break; 
			case "table_list": 
				choice_list = (
					<div className="syntaxs__sub-list">
						<table className="table-size-matrix"
							ref = "table-matrix"
							onMouseMove={(ev) => {
								if(!this.state.tableChoiceLock) {
									let $cX = ev.pageX,
										$cY = ev.pageY,
										$dX = $cX - tablePosition[0],
										$dY = $cY - tablePosition[1],
										XNum = Math.ceil($dX / tdSize),
										YNum = Math.ceil($dY / tdSize);
									(XNum < 1) && (XNum = 1); 
									(YNum < 1) && (YNum = 1);
									this.setState({
										cTableX: XNum,
										cTableY: YNum
									}) 
								}
							}}
							onClick={() => {
								this.setState({
									tableChoiceLock: this.state.tableChoiceLock ^= 1
								})
							}}
						>
							<tbody>
								{tableRow}
							</tbody>
						</table>
						<p className="table-matrix-dimension">{this.state.cTableX} x {this.state.cTableY} 表格</p>
						<button className="insert"
							onClick={(ev) => {
								this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
									let $x = this.state.cTableX,
										$y = this.state.cTableY,
										str = ""

									for(let i = 0; i<$x; i++) {
										str += `|   标题${i+1}   `;
									}
									str += "|\n";
									for(let i = 0; i<$x; i++) {
										str += `| :---------: `;
									}
									str += "|\n";

									let count = 1;
									
									for(let j = 0; j<$y; j++) {
										for(let i = 0; i<$x; i++) {
											str += `| 表格内容${count} `;
											count++;
										}
										str += "|\n";
									}

									editerWrap.value += str;
									this.setState({
										tableChoiceLock: 0,
										cTableX: 1,
										cTableY: 1
									})
								})
							}}
						>插入表格</button>
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
									this.SyntaxsListHandle.call(null, ev, (ev, editerWrap) => {
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
									this.SyntaxsListHandle.call(null, ev, (ev, editerWrap) => {
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
									this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
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
									this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
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
							<li className="table" 
								title="选择表格"
								onClick={(ev) => {
									this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
	      								if(this.state.choiceType === "table_list") {
	      									this.setState({
												choiceType: ""
											})
	      								} else {
	      									this.setState({
												choiceType: "table_list"
											})	
	      								}					
									})
								}}
							></li>
							<li className="blockquote-block" 
								title="引用"
								onClick={(ev) => {
									this.SyntaxsListHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "> 引用内容";
	      								let len = editerWrap.value.length;
	      								editerWrap.setSelectionRange(len - 4, len);
									})
								}}
							></li>
							<li className="o-list" 
								title="有序列表"
								onClick={(ev) => {
									this.SyntaxsListHandle.call(null, ev, (ev, editerWrap) => {
	      								editerWrap.value += "\n1. 例1\n2. 例2\n3. 例3";
									})
								}}
							>
							</li>
							<li className="u-list" 
								title="无序列表"
								onClick={(ev) => {
									this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
	      								editerWrap.value += "\n* 例1\n* 例2\n* 例3";
									})
								}}
							></li>
							<li className="h1-tag" 
								title="大标题"
								onClick={(ev) => {
									this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
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
									this.SyntaxsListHandle.call(null, ev, (ev, editerWrap) => {
	      								let len = editerWrap.value.length;
	      								editerWrap.value += "\n## 小标题\n";
	      								editerWrap.setSelectionRange(len + 4,len + 7);
									})
								}}
							>
							</li>
							<li className="code-block" 
								title="代码高亮"
								onClick={(ev)=> {
									this.SyntaxsListHandle.call(this, ev, (ev, editerWrap) => {
	      								if(this.state.choiceType === "code_block_list") {
	      									this.setState({
												choiceType: ""
											})
	      								} else {
	      									this.setState({
												choiceType: "code_block_list"
											})	
	      								}					
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
							   draggable={false}
							   onMouseDown={(ev)=> {
							   	this.mdown.call(this,ev,(params)=>{
							   		let [
							   			dragTop,
							   			dragLeft
							   		] = params;

							   		if(this.props.MainFeedBackBox && dragTop <= 150) {
										dragTop = 150;

									} else if (dragTop <= 30) {
										dragTop = 30;
									}

									this.setState({
										editerHeight: dragTop
									})
							   	})
							   }}
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