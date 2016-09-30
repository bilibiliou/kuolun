import React, { Component, PropTypes } from "react";
import { CommentFeedback } from "../router.jsx";
import { getCookie } from "../../js/util.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LoginOutThunk, LoginTableStateTask } from "../../actions/LoginActions.js";
import { AlertPlaneThunk} from "../../actions/AlertPlaneActions.js";

// 主评论框
class CommentEditer extends Component {
	constructor (props) {
		super(props);
		this.LoginOut = this.LoginOut.bind(this);
	}

	LoginOut () {
		this.props.actions.AlertPlaneThunk("您确定要登出吗？", function () {
			this.props.actions.LoginOutThunk();
		}.bind(this)); 
	}

	componentDidMount () {
		let snsLogin = this.refs["sns-login"],
			loginInfos = this.refs["login-infos"],
			method   = getCookie("login-method")
	}

	render() {
		let {
			userInfo,
			actions
		} = this.props;

		let LoginBthns;

		if(userInfo.userEmail) {
			LoginBthns = (
				<p className="login-infos" 
	               ref="login-infos"
	            >
			        <a href="javascript:;">
	                    {userInfo.userName} &lt; {userInfo.userEmail} &gt;
	                </a> 
	                <span> ( {userInfo.commentAuthor} )</span>
	                
	               	<button 
	                	className="login-out__btn"
	                	onClick = {this.LoginOut}
	                >
	                登出
	                </button>      
			    </p> 
        	)
		} else {
			LoginBthns = (
				<p className="login-infos" 
	               ref="login-infos"
	            >
	        		<span className="init_prompt">
	                    欢迎您使用阔论，请先登录 
	                </span>
	                <button 
	                	className="login-in__btn"
	                	onClick = {actions.LoginTableStateTask}
	                >
	                登录
	                </button>
        		</p> 
        	)
		}
		 
		return (
			<section className="editer-wrap">
				<section className="comment__feedback">
					<figure className="editer-wrap__avatar">
						<img src="/img/default-avatar.png" alt="avatar" />
					</figure>

					<section className="comment__feedback--section">
						{ LoginBthns }
						<CommentFeedback 
							CommentMainTask = {true} 
							MainFeedBackBox = {true}
						/>
					</section>
				</section>		
			</section>
		)
	}
}


export default connect(
	(state) => {
		return {
			userInfo: state.LoginReducer.userInfo
		}
	},

	(dispatch) => {
		return {
			actions: bindActionCreators({
				AlertPlaneThunk,
				LoginOutThunk,
				LoginTableStateTask
			}, dispatch)
		}
	}
)(CommentEditer);
