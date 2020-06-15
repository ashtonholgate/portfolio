import React, { useRef, useEffect, useState } from 'react';
import './SecondSection.scss';
import { Zigzag } from '../styling/Zigzag';

export function SecondSection(props) {
	const { scrollPosition, windowHeight, borderWidth } = props;
	const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
	const titleTextVisibilityMarker = useRef(null);

	useEffect(() => {
		if (titleTextVisibilityMarker.current) {
			setTitleTextIsVisible(
				titleTextVisibilityMarker.current.getBoundingClientRect().bottom - windowHeight - borderWidth < 0);
		}
	}, [scrollPosition, windowHeight, borderWidth]);

	return (
		<div className="second-section">
			<div ref={titleTextVisibilityMarker} className="title-section">
				<div className={`zigzag-wrapper${titleTextIsVisible ? " visible" : ""}`}>
					<Zigzag className="zigzag" />
				</div>
				<div className="text-wrapper">
					<h2 className="text">About</h2>
				</div>
				<div className="text-wrapper">
					<h2 className="text">Me</h2>
				</div>
			</div>
		</div>
	);
}
