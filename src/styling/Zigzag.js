import React from 'react';
import './Zigzag.scss';

export function Zigzag(props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={`zigzag-component ${props.className}`} viewBox="0 0 73.94 14.19">
			<polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83" style={{strokeDashoffset: "2e-05", strokeDasharray: "none"}}></polyline>
		</svg>
	);
}