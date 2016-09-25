import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TorFTask, AlertPlaneTask } from "../../actions/AlertPlaneActions.js";

class AlertPlane extends Component {
    constructor (props) {
        super(props);

        this.sure = this.sure.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount () {  
        let $self = this,
            target = $self.refs["alert-wrap-bg"];
        
        if(target) {
            $self.changeView(target)    
        }
        
    }

    componentDidUpdate () {
        let $self = this,
            target = $self.refs["alert-wrap-bg"];

        if(target) {
            $self.changeView(target)    
        }
    }

    changeView (target) {
        let oW = innerWidth,
            oH = innerHeight;

            target.style.width = oW + "px";
            target.style.height = oH + "px";
    }   

    sure () {
        this.props.actions.TorFTask(1);
    }

    cancel () {
        this.props.actions.TorFTask(0);
    }

    render() {
        let {
            AlertPlaneState
        } = this.props;
        
        return (
            AlertPlaneState ? 
            (<section 
                className="alert__wrap"
                ref="alert-wrap-bg"
            >
                <div
                    className="alert__plane"
                >
                    <header></header>

                    <p className="alert__plane--question">{this.props.AlertPlanePrompt}</p>

                    <footer>
                        <label>
                            <i className="alert__plane--btn_sure"></i>
                            <button
                                onClick={this.sure}
                            >确定</button>
                        </label>
                        
                        <label>
                            <i className="alert__plane--btn_cancel"></i>
                            <button
                                onClick={this.cancel}
                            >取消</button>
                        </label>
                    </footer>
                </div>
            </section>) : null
        )
         
    }
}

export default connect(
    (state) => {
        return {
            AlertPlaneState: state.AlertPlaneReducer.AlertPlaneState,
            AlertPlanePrompt: state.AlertPlaneReducer.AlertPlanePrompt
        }
    },

    (dispatch) => {
        return {
            actions: bindActionCreators({
                AlertPlaneTask,
                TorFTask
            },dispatch)
        }
    }
)(AlertPlane) 
