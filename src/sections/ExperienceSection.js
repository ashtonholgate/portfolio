import React, { useRef, useEffect, useState } from 'react';
import { Zigzag } from '../styling/Zigzag';
import './ExperienceSection.scss';
import moment from 'moment';

export function ExperienceSection(props) {
	const { scrollPosition, windowHeight, borderWidth } = props;
	const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
	const titleTextVisibilityMarker = useRef(null);
	const ImageVisibilityMarker = useRef(null);
	const [ImageOffset, setImageOffset] = useState(
		0);

	useEffect(() => {
		if (!titleTextIsVisible) {
			setTitleTextIsVisible(
				titleTextVisibilityMarker.current.getBoundingClientRect().bottom - windowHeight - borderWidth < 0);
		}
		const top = ImageVisibilityMarker.current.getBoundingClientRect().top;
		setImageOffset(
			(top - windowHeight - borderWidth) / 2
		);
	}, [scrollPosition, windowHeight, borderWidth, titleTextIsVisible, ImageOffset]);

	const luxtripperStartDate = moment([2017, 9]);
	const luxtripperEndDate = moment();
	const luxtripperYears = luxtripperEndDate.diff(luxtripperStartDate, 'years');
	const luxtripperMonths = luxtripperEndDate.diff(luxtripperStartDate, 'months') % 12;

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
					<a className="title-section" href="//www.luxtripper.co.uk" target="_blank" rel="noopener noreferrer">
						<p className="title">
							Luxtripper
						</p>
						<p className="sub-title">Front End Developer &amp; Lead UI Designer</p>
						<p className="post-title">
							Oct 2017 - Present • {luxtripperYears} Years, {luxtripperMonths} Months
						</p>
					</a>
					<p className="text">
						At Luxtripper I build <b>Web-Apps</b> in <b>React</b>, using <b>Typescript</b>, but not before designing them first in <b>Adobe XD</b> or <b>Balsamiq</b>.
					</p>
					<p className="text">
						I have designed and built the following apps:
					</p>
					<ul className="text">
						<li>Multiple CRMs with integrated quote builders (for various projects)</li>
						<li>Customer surfaced quote (seen pictured adjacently)</li>
						<li>Automated contract pricing calculator</li>
					</ul>
				</div>
				<div ref={ImageVisibilityMarker} className="images-wrapper">
					<div className="phone-main-wrapper">
						<div className="phone-frame" style={{ transform: `translateY(${ImageOffset / 2}px) rotateX(${ImageOffset / 50}deg) rotateY(${ImageOffset / 50}deg) rotateZ(${ImageOffset / 50}deg)` }}>
							<div className="phone-notch" />
							<img className="phone-content" src={require("../images/luxtripper/quote.png")} alt="Luxtripper iPhone" style={{ transform: `translateY(${ImageOffset * 2}px)` }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}