import React, { useRef, useEffect, useState } from 'react';
import { Zigzag } from '../styling/Zigzag';
import './ExperienceSection.scss';

export function ExperienceSection(props) {
	const { scrollPosition, windowHeight, borderWidth } = props;
	const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
	const titleTextVisibilityMarker = useRef(null);
	const ImageVisibilityMarker = useRef(null);
	const [ImageOffset, setImageOffset] = useState(0);

	useEffect(() => {
		if (!titleTextIsVisible) {
			setTitleTextIsVisible(
				titleTextVisibilityMarker.current.getBoundingClientRect().bottom - windowHeight - borderWidth < 0);
		}
		const top = ImageVisibilityMarker.current.getBoundingClientRect().top;
		const height = ImageVisibilityMarker.current.getBoundingClientRect().height;
		setImageOffset(
			(top - windowHeight - borderWidth) / 2
		);
	}, [scrollPosition, windowHeight, borderWidth, titleTextIsVisible, ImageOffset]);

	return (
		<div className="experience-section">
			<div ref={titleTextVisibilityMarker} className="title-section">
				<div className={`zigzag-wrapper${titleTextIsVisible ? " visible" : ""}`}>
					<Zigzag className="zigzag" />
				</div>
				<div className="text-wrapper">
					<h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>Expe</h2>
				</div>
				<div className="text-wrapper">
					<h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>rience.</h2>
				</div>
			</div>
			<div className="content-section">
				<div className="text-section">
					<a className="link" href="//www.whenwillyou.win" target="_blank" rel="noopener noreferrer">
						Luxtripper
					</a>
					<p>Front End Developer &amp; Lead UI Designer</p>
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
				<div ref={ImageVisibilityMarker} className="images-wrapper">
					<div className="phone-main-wrapper">
						<div className="phone-frame" style={{ transform: `translateY(${ImageOffset / 2}px) rotateX(${ImageOffset / 50}deg) rotateY(${ImageOffset / 50}deg) rotateZ(${ImageOffset / 50}deg)` }}>
							<div className="phone-notch" />
							<div className="phone-content" style={{ transform: `translateY(${ImageOffset * 2}px)` }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}