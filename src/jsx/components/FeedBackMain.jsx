import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DelThunk } from "../../actions/CommentActions.js";

import { formatDate } from "../../js/util.js";
import { CommentFeedback } from "../router.jsx";
import { AlertPlaneThunk } from "../../actions/AlertPlaneActions.js";

class FeedBackMain extends Component {
	constructor (props) {
		super(props);

		this.toggleFeedBackPlaneState = this.toggleFeedBackPlaneState.bind(this);
		this.DelSelf = this.DelSelf.bind(this);
		this.state = {
			feedbackBoff: false
		}
	}

	DelSelf () {
		let {
			ParentIndexOnDb,
			actions,
			NowPage,
			SortState
		} = this.props,
		{
			FeedBackIndex
		} = this.props.FeedBackData;

		actions.AlertPlaneThunk("您确定删除该回复吗？", () => {
			actions.DelThunk(NowPage - 1, SortState, FeedBackIndex, ParentIndexOnDb);
		})
	}

	toggleFeedBackPlaneState () {
		this.setState({
			feedbackBoff: !this.state.feedbackBoff
		})
	}

	render () {
		let {
			FeedBackIndex,
			avatar_url,
			author_name,
			author_email,
			publish_time,
			publish_content,
			commentAuthor,
			vote_up,
			ForBidFeedBack,
			BeFeedIndex
		} = this.props.FeedBackData,
		{
			ItemDataes,
			userInfo,
			ParentIndex,
			ParentIndexOnDb
		} = this.props;
		let pt = formatDate( publish_time )

		return (
			<section className="feedback__content--main">
				<figure className="feedback__content--avatar">
					<img src={avatar_url} />
				</figure>

				<section className="feedback__wrap--content">
					<p className="feedback__content--author">
						<a href="javascript:;">
							{author_name}
						</a>
						<span> ({commentAuthor})</span>
					</p>

					{
						ForBidFeedBack ?
						<p className="sub__feedback">
							回复：
							<span>{ItemDataes[ParentIndex].FeedBack[BeFeedIndex].author_name}</span>
						</p> : null
					}

					<p className="feedback__content--time">发布于：{ pt }</p>

					<div className="feedback__content--content"
						 dangerouslySetInnerHTML={{__html: publish_content}}
					>
					</div>

					<footer className="feedback__content--options">
						<section className="feedback__content--options__wrap">
							{
								!ForBidFeedBack && !(author_email === userInfo.userEmail)?
								(<a className="feedback__content--options__callback" 
 								   href="javascript:;"
 								   onClick = {this.toggleFeedBackPlaneState}
 								>
 									<i></i>
 									<span>回复</span>
 								</a>) : null
							}
							
							{
								userInfo.userEmail === author_email ?
								(<a className="feedback__content--options__del" 
									href="javascript:;"
									onClick={this.DelSelf}
								 >
									<i></i>
									<span>删除</span>
								</a>) : null 
							}
						</section>

						{
							// <section className="feedback__options__vote-up">
							// 	<button>
							// 		<span className="vote-up-counter">{vote_up}</span> 赞
							// 	</button>
							// </section>
						}
					</footer>
				</section>

				{
					this.state.feedbackBoff ?
					(<section className="feedback__content"
							 ref="feedback-content"
					>
						<CommentFeedback  
							CommentSubFeedBackTask = {true}
							ParentIndexOnDb = {ParentIndexOnDb}
							ParentIndex = {ParentIndex}
							BeFeedIndex = {FeedBackIndex}
						/>
					</section>) : null
				}
			</section>
		)
	}
}

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
				AlertPlaneThunk
			},dispatch)
		}
	}
)(FeedBackMain);
