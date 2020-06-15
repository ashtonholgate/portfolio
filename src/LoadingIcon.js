import React from 'react';
import './LoadingIcon.scss';

export function LoadingIcon() {
	return (
		<div className="loading-icon">
			{[...Array(9)].map((x, i) =>
				<div className="item" key={i} style={{animationDelay: `${i / 10}s`}} />
			)}
		</div>
	);
}