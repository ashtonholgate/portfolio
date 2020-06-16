import React, { useRef, useEffect, useState } from 'react';
import { Zigzag } from '../styling/Zigzag';
import './AboutMeSection.scss';

export function AboutMeSection(props) {
	const { scrollPosition, windowHeight, borderWidth } = props;
	const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
	const [skillsSectionIsVisible, setSkillsSectionIsVisible] = useState(false);
	const titleTextVisibilityMarker = useRef(null);
	const skillsSectionVisibilityMarker = useRef(null);
	const [skillsSectionOffset, setSkillsSectionOffset] = useState(0);

	useEffect(() => {
		if (!titleTextIsVisible) {
			setTitleTextIsVisible(
				titleTextVisibilityMarker.current.getBoundingClientRect().bottom - windowHeight - borderWidth < 0);
		}
		const bottom = skillsSectionVisibilityMarker.current.getBoundingClientRect().bottom;
		const height = skillsSectionVisibilityMarker.current.getBoundingClientRect().height;
		setSkillsSectionOffset(
			(skillsSectionVisibilityMarker.current.getBoundingClientRect().top - (windowHeight / 2) + (height / 2) - borderWidth) / 2
		);
		if (!skillsSectionIsVisible && skillsSectionVisibilityMarker.current.getBoundingClientRect().top - (windowHeight / 1.5) - borderWidth < 0) setSkillsSectionIsVisible(true);
	}, [scrollPosition, windowHeight, borderWidth, titleTextIsVisible, skillsSectionOffset, skillsSectionIsVisible]);

	return (
		<div className="about-me-section">
			<div ref={titleTextVisibilityMarker} className="title-section">
				<div className={`zigzag-wrapper${titleTextIsVisible ? " visible" : ""}`}>
					<Zigzag className="zigzag" />
				</div>
				<div className="text-wrapper">
					<h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>About</h2>
				</div>
				<div className="text-wrapper">
					<h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>Me.</h2>
				</div>
			</div>
			<div className="content-section">
				<div className="text-section">
					<p className="text">
						I am a <b>Typescript</b> developer who loves building exciting, engaging, experiences
					on the web using <b>React</b>.
					</p>
					<p className="text">
						With an eye for detail, a passion for aesthetics, and a knack for design
						I can join the design process and provide the sort of insight only a developer
						can.
					</p>
					<p className="text">
						I believe that animation can play a huge role in affecting how the user percieves the
						software. Finely tuned animations, designed to aid the user in understanding the flow of
						data, can turn a good app into a great app.
					</p>
				</div>
				<div ref={skillsSectionVisibilityMarker} className="skills-section-main-wrapper">
					<div className={`skills-section-offset-wrapper${skillsSectionIsVisible ? " visible" : ""}`} style={{ top: `${skillsSectionOffset}px` }}>
						<div className="section-wrapper developer">
							<div className="title-wrapper">
								<div className={`zigzag-wrapper${skillsSectionIsVisible ? " visible" : ""}`}>
									<Zigzag className="zigzag" />
								</div>
								<h2 className="title">Developer</h2>
							</div>
							<div className="skills-wrapper developer desktop">
								<p>Typescript</p>
								<p>Jest</p>
								<p>React</p>
								<p>Puppeteer</p>
								<p>Redux</p>
								<p>Webpack</p>
								<p>SCSS</p>
								<p>Git</p>
								<p>CSS Animations</p>
								<p>Greensock</p>
							</div>
							<div className="skills-wrapper developer small-tablet">
								<p>Typescript</p>
								<p>React</p>
								<p>Redux</p>
								<p>SCSS</p>
								<p>CSS Animations</p>
								<p>Jest</p>
								<p>Puppeteer</p>
								<p>Webpack</p>
								<p>Git</p>
								<p>Greensock</p>
							</div>
						</div>
						<div className="section-wrapper designer">
							<div className="title-wrapper">
								<div className={`zigzag-wrapper${skillsSectionIsVisible ? " visible" : ""}`}>
									<Zigzag className="zigzag" />
								</div>
								<h2 className="title">Designer</h2>
							</div>
							<div className="skills-wrapper designer">
								<p>Adobe XD</p>
								<p>Adobe Photoshop</p>
								<p>Balsamiq</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
