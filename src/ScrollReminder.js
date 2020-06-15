import React from 'react'
import './ScrollReminder.scss';

export function ScrollReminder(props) {
	const { isVisible } = props;

	return (
		<div className={`scroll-reminder${isVisible ? "" : " hidden"}`}>
			<Arrow />
			<p className="text">scroll</p>
		</div>
	)
}

function Arrow() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="18"
			viewBox="0 0 17 10"
			className="arrow"
		>
			<path
				d="M6.22,8.75,3.37,5.89H17V4.12H3.37L6.22,1.25,5,0,0,5l5,5Z"
			/>
		</svg>
	)
}
