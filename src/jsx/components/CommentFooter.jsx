import React, { Component, PropTypes } from "react";
import {
	CommentPagination
} from "../router.jsx";


class CommentFooter extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<footer className="comment__footer">
				<CommentPagination />
			</footer>
		)
	}
}

export default CommentFooter;