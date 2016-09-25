import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { 
	LoginTableStateTask, 
	LoginInThunk
} from "../../actions/LoginActions.js";


class LoginTable extends Component {
	constructor (props) {
		super (props);

		this.state = {
			userNameInfo: "",
			userEmailInfo: ""
		}

		this.nameLegal = false;
		this.emailLegal = false;
		this.toggleState  = this.toggleState.bind(this);
		this.close        = this.close.bind(this);
		this.sP           = this.sP.bind(this);
		this.LoginIn      = this.LoginIn.bind(this);
		this.fastLogin    = this.fastLogin.bind(this);
		this.Validate     = this.Validate.bind(this);
	}

	changeView (target) {
		let oW = innerWidth,
			oH = innerHeight;

		target.style.width = oW + "px";
		target.style.height = oH + "px";
	}	

	componentDidMount () {	
		let $self = this,
			target = $self.refs["login-table-bg"];
		
		if(target) {
			$self.changeView(target)	
		}
		
	}

	componentDidUpdate () {
		let $self = this,
			target = $self.refs["login-table-bg"];

		if(target) {
			$self.changeView(target)	
		}
	}

	toggleState (ev) {
		let target = ev.target,
			index  = ~~target.dataset.index,
			stateBar = this.refs["state-bar"],
			touristLogin = this.refs["tourist-login"],
			snsLogin = this.refs["sns-login"]

			if (index) {
				stateBar.classList.add("state__bar--toggle");
				snsLogin.classList.remove("none");
				touristLogin.classList.add("none");
			} else {
				stateBar.classList.remove("state__bar--toggle");
		 		snsLogin.classList.add("none");
				touristLogin.classList.remove("none");
			}
	}

	close (ev) {
		let {
			LoginTableStateTask,
			ChangeValidateTask,
			ChangeValidateInfoTask
		} = this.props.actions
		
		LoginTableStateTask();

		this.nameLegal = false;
		this.emailLegal = false;

		this.setState({
			userNameInfo : "",
			userEmailInfo : ""	
		})	
	}

	sP (ev) {
		ev.stopPropagation();
	}

	LoginIn () {
		let Name = this.refs["tourist-login-user-name"].value,
			Email    = this.refs["tourist-login-user-email"].value,
		{
			actions
		} = this.props;

		if (this.nameLegal && this.emailLegal) {
			actions.LoginInThunk({
				userName: Name,
				userEmail: Email,
				commentAuthor: "游客",
				userAvatar: "/img/default-avatar.png"
			});

			this.close();
		} else {
			return;
		}
	}

	Validate (type) {
		let Name = this.refs["tourist-login-user-name"],
			Email = this.refs["tourist-login-user-email"],
		
		{
			actions,
		} = this.props,
		
		{
			userNameInfo,
			userEmailInfo
		} = this.state;

		const rule = {
		    "username" : {
		        regexp: /^\w{4,12}$/,
		        mes: {
		            tooLong:"昵称长度为 4到12位",
		            illegalChar: "只能由下划线数字和字母组成" 
		        }
		    },

		    "email" : {
		        regexp: /^\w+@\w+\.\w{2,4}$/,
		        mes: {
		            illegalChar: "非法的邮箱地址"
		        }
		    }
		}

		switch (type) {
			case "name":
				if (rule.username.regexp.test(Name.value)) {
		            this.nameLegal = true;

		            this.setState({
		            	userNameInfo : ""
		            })
		        } else {
		        	this.nameLegal = false;

		            if (Name.value.length < 4 || Name.value.length > 12) {
		            	this.setState({
		            		userNameInfo : rule.username.mes.tooLong
		            	})
		            } else {
		            	this.setState({
		                	userNameInfo : rule.username.mes.illegalChar
		            	})
		            }
		        }
				break;

			case "email":
				if(rule.email.regexp.test(Email.value)) {
					this.emailLegal = true; 
					
					this.setState({
	                	userEmailInfo : ""
	            	})
		        } else {
		            this.emailLegal = false;		        		
		            
		            this.setState({
		            	userEmailInfo : rule.email.mes.illegalChar		        		
		            })
		        }
				break;
		}
	}

	fastLogin (ev,type) {
		if(ev.keyCode === 13) {
			this.Validate(type);			
			this.LoginIn();
		}
	}

	render () {
		let {
			loginTableState,
			actions
		} = this.props;
		
		if(!loginTableState) {
			return (
				<section ref="login-table-bg" 
						 className="login__table__bg" 
						 onClick={this.close}
				>
					<section className="login__table"
							 onClick={this.sP}
					>	
						<section className="login__table__wrap">
							<header className="login__table__header">
								<button data-index="0"
										onClick={this.toggleState} 
										ref="btn1"
								>
									游客登录
								</button>
								<button data-index="1" 
										onClick={this.toggleState}
										ref="btn2" 
								>
									sns登录
								</button>

								<div ref="state-bar" className="state__bar"></div>
							</header>

							<section className="login__table__forms">
								<form className="tourist__login" ref="tourist-login">
									<div className="input__wrap">
										<p>昵称:</p>
										<input type="text" 
											   className="tourist__login--user-name" 
											   onKeyDown={(ev)=> {
											   	this.fastLogin.call(this, ev, "name")
											   }}
											   onBlur={
											   	this.Validate.bind(this,"name")
											   }
											   ref="tourist-login-user-name"
										/>
										<label >{this.state.userNameInfo}</label>
									</div>

									<div className="input__wrap">
										<p>邮箱：</p>
										<input type="text" 
										       className="tourist__login--email" 
										       onKeyDown={(ev) => {
										       		this.fastLogin.call(this,ev, "email");
										       	}}
										       onBlur={
										       	this.Validate.bind(this,"email")
										       } 
										       ref="tourist-login-user-email"
										/>
										<label >{this.state.userEmailInfo}</label>
									</div>

									<input type="button" 
										   className="tourist__login--submit" 
										   value="登录" 
										   onClick={this.LoginIn} 
									/>
								</form>

								<form className="sns__login none" action="" ref="sns-login">
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</form>
							</section>
						</section>
					</section>
				</section>
			)
		} else {
			return null;
		}
			
	}
}

LoginTable.defaultProps = {
	
}

export default connect(
	(state) => {
		return {
			loginTableState: state.LoginReducer.loginTableState
		}
    },

	(dispatch) => {
		return {
			actions: bindActionCreators({
				LoginTableStateTask,
				LoginInThunk
			}, dispatch)
		}
	}
)(LoginTable);