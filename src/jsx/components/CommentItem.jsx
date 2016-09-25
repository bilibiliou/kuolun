import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DelThunk, VoteUpThunk } from "../../actions/CommentActions.js";
import { AlertPlaneThunk } from "../../actions/AlertPlaneActions.js";
import { formatDate } from "../../js/util.js";
import { 
	CommentFeedback,
	FeedBackMain 
} from "../router.jsx";

class CommentItem extends Component {
	constructor (props) {
		super(props);
		this.ToggleFeedbackShow = this.ToggleFeedbackShow.bind(this);
		this.DelSelf = this.DelSelf.bind(this);
		this.VoteUpHandle = this.VoteUpHandle.bind(this);

		// 点赞功能 先从数据库获获取 加载页面后的点赞数，点击后
		// 只在View 层做数据更新，不做总体的数据更新，并发送一个Ajax, 修改
		// 数据库中的点赞数
		this.state = {
			feedContentboff : false,
			feedWrapboff : false,
			// isVoted: this.props.ItemData.isVoted,
			// vote_up: this.props.ItemData.vote_up
		};
	}

	DelSelf () {
		let {
			index
		} = this.props.ItemData,
		{
			ItemDataes,
			actions,
			SortState,
			NowPage
		} = this.props;

		actions.AlertPlaneThunk("您确定删除该评论？（其下的回复也会被删除!）", () => {
			actions.DelThunk(NowPage - 1, SortState, index);
		});
	}

	ToggleFeedbackShow () {
		let {
			feedContentboff,
			feedWrapboff
		} = this.state;

		this.setState({
			feedContentboff: !feedContentboff,
			feedWrapboff : !feedWrapboff
		})
	}

	VoteUpHandle () {
		// let {
		// 	actions,
		// 	userInfo
		// } = this.props,
		// {
		// 	index
		// } = this.props.ItemData

		// this.setState({
		// 	isVoted: false,
		// 	vote_up: this.state.vote_up + 1
		// })

		// actions.VoteUpThunk(index, userInfo, function () {
		// 	// 如果发生了错误，将点赞状态复原
		// 	this.setState({
		// 		isVoted: true,
		// 		vote_up: this.state.vote_up - 1
		// 	})
		// }.bind(this));
	}

	render () {
		let {
			index,
			avatar_url,
			author_name,
			author_email,
			publish_time,
			publish_content,
			commentAuthor,
			FeedBack,
			vote_up
		} = this.props.ItemData,
		{
			ItemDataes,
			userInfo,
			SelfIndex
		} = this.props;
		
		let pt = formatDate( publish_time ),
			voteUpBox;

		if (this.state.isVoted && author_name !== userInfo.userName) {
			voteUpBox = (
				<section className="comment__options__has-voted-up" >
					<button>
						<span 
							className="vote-up-counter"
						>{vote_up}</span> 已赞
					</button>
				</section>
			)
			
		} else {
			voteUpBox = (
				<section className="comment__options__vote-up" title="点赞">
					<button 
						onClick = {this.VoteUpHandle}
					>
						<span 
							className="vote-up-counter"
						>{vote_up}</span> 赞
					</button>
				</section>
			)
		}

		return (
			<li className="comment__item">
				<section className="comment__content">
						<figure className="comment__author--avatar">
							<img src={avatar_url} />
						</figure>

						<section className="comment__content--main">
							<p className="comment__content--author">
								<a href="javascript:;">
									{author_name}
								</a>
								<span> ({commentAuthor})</span>
							</p>
							<p className="comment__content--time">发布于：{pt}</p>

							<p className="comment__content--content">
								{publish_content}
							</p>

							<footer className="comment__content--options">
								<section className="comment__content--options__wrap">
									{
										!(userInfo.userEmail === author_email) ?
										(<a  className="comment__content--options__callback" 
										    href="javascript:;"
											onClick={this.ToggleFeedbackShow}
										>
											<i></i>
											<span>回复 ({FeedBack.length}条)</span>
										</a>): null
									}	


									{
										userInfo.userEmail === author_email ?
										(<a className="comment__content--options__del" 
											href="javascript:;"
										 	onClick={this.DelSelf}
										 >
											<i></i>
											<span>删除</span>
										</a>) : null	
									}
									
								</section>

								
								{ voteUpBox }

							</footer>
						</section>

						{
							this.state.feedContentboff ? 
							(
								<section className="feedback__content"
										 ref="feedback-content"
								>
								{	
									ItemDataes[SelfIndex].FeedBack.map((value, idx) => 
										<FeedBackMain 
											FeedBackData={value}
											ParentIndexOnDb={index}
											ParentIndex={SelfIndex} 
											key={idx}  
										/>
									)
								}
								</section>
							) : null
						}

						{
							this.state.feedWrapboff ?
							(
								<section className="comment__feedback__wrap"
										 ref="comment-feedback-wrap"
								>
									<section className="comment__feedback">
										<h3>说点什么吧...</h3>
										<CommentFeedback 
											CommentFeedBackTask={true}
											ParentIndex={SelfIndex}
											ParentIndexOnDb={index}
										/>
									</section>
								</section>
							) : null
						}
						
				</section>
			</li>
		)
	}
}

// CommentItem.PropTypes

export default connect(
	(state) => {
		return {
			ItemDataes: state.CommentReducer.ItemDataes,
			userInfo: state.LoginReducer.userInfo,
			SortState: state.SortReducer.SortState,
			NowPage: state.HandleDataReducer.NowPage
		}		
	},

	(dispatch) => {
		return {
			actions: bindActionCreators({
				DelThunk,
				AlertPlaneThunk,
				VoteUpThunk
			}, dispatch)
		}
	}
)(CommentItem);