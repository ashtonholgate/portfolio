import React, { useRef, useEffect, useState } from 'react';
import { Zigzag } from '../styling/Zigzag';
import './ProjectsSection.scss';

export function ProjectsSection(props) {
	const { scrollPosition, windowHeight, borderWidth } = props;
	const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
	const [WWYWIsVisible, setWWYWIsVisible] = useState(false);
	const titleTextVisibilityMarker = useRef(null);
	const WWYWVisibilityMarker = useRef(null);
	const [WWYWOffset, setWWYWOffset] = useState(0);

	useEffect(() => {
		if (!titleTextIsVisible) {
			setTitleTextIsVisible(
				titleTextVisibilityMarker.current.getBoundingClientRect().bottom - windowHeight - borderWidth < 0);
		}
		const top = WWYWVisibilityMarker.current.getBoundingClientRect().top;
		const height = WWYWVisibilityMarker.current.getBoundingClientRect().height;
		setWWYWOffset(
			(top - (windowHeight / 2) + (height / 2) - borderWidth) / 2
		);
		if (!WWYWIsVisible && WWYWVisibilityMarker.current.getBoundingClientRect().top - (windowHeight / 2) - borderWidth < 0) setWWYWIsVisible(true);
	}, [scrollPosition, windowHeight, borderWidth, titleTextIsVisible, WWYWOffset, WWYWIsVisible]);

	return (
		<div className="projects-section">
			<div ref={titleTextVisibilityMarker} className="title-section">
				<div className={`zigzag-wrapper${titleTextIsVisible ? " visible" : ""}`}>
					<Zigzag className="zigzag" />
				</div>
				<div className="text-wrapper">
					<h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>Projects.</h2>
				</div>
			</div>
			<div className="content-section">
				<div className="text-section">
					<a className="link" href="//www.whenwillyou.win" target="_blank" rel="noopener noreferrer">
						WhenWillYou.Win
					</a>
					<p>Lottery Simulator</p>
					<p className="text">
					Built in <b>React</b>, using <b>Redux</b> and <b>Typescript</b>.
					</p>
					<p className="text">
					First choose which lottery you'd like to simulate, either the UK Lotto or Euromillions, then pick your numbers and begin! The simulator will run accurate simulations as fast as your device will allow until you are 
					lucky enough to hit the jackpot. When will you win?
					</p>
					<p className="text">
					Project designed in <b>Adobe XD</b> using a mobile first approach, desktop layout informed by mobile design. Used animations between state transitions as a tool to communicate the flow of information, thus making the program 
					more intuitive to use.
					</p>
				</div>
				<div ref={WWYWVisibilityMarker} className="wwyw-image-wrapper">
					<div className={`wwywe-image${WWYWIsVisible ? " visible" : ""}`} style={{ top: `${WWYWOffset}px` }} />
					<div className={`wwywl-image${WWYWIsVisible ? " visible" : ""}`} style={{ top: `${WWYWOffset * 1.5}px` }} />
				</div>
			</div>
		</div>
	);
}
