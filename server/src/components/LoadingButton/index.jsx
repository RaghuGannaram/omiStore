import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

function LoadingButton(props) {
	return (
		<button
			type={props.type}
			className={classNames("btn btn-wide", props.className, { "btn-wait": props.loading }, { disabled: props.loading })}
			style={props.style}
			onClick={props.onClick}
		>
			{props.loading ? "Please Wait...!" : <span>{props.children}</span>}
		</button>
	);
}

LoadingButton.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
};

LoadingButton.defaultProps = {
	type: "button",
	className: "btn-primary btn-7",
	loading: false,
};

export default LoadingButton;
