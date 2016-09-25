import React, { Component, PropTypes } from "react";

import {
	CommentHeader,
	CommentList,
	CommentFooter,
	CommentEditer,
	LoginTable,
	AlertPlane
} from "../router.jsx";

class CommentWrap extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<section className="comment__wrap">
				<CommentHeader />
				<CommentList />
				<CommentFooter />
				<CommentEditer />
				<LoginTable />
				<AlertPlane />
			</section>
		)
	}
}

export default CommentWrap;