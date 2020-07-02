import React from 'react';
import { ScrollReminder } from '../ScrollReminder';
import './IntroSection.scss';

export function IntroSection(props) {
	const {
		isLoading,
		initializationIsComplete,
		titleTextIsVisible,
		scrollPosition,
		windowHeight,
		windowWidth
	} = props;

	console.log(scrollPosition, windowHeight, scrollPosition < windowHeight);

	const slideUpWrapperTransformUnset = `translate3d(0px, 0px, 0px)`;
	const slideUpWrapperTransformDesktop = scrollPosition < windowHeight ? slideUpWrapperTransformUnset : `translate3d(0px, -${(scrollPosition - windowHeight) / 2}px, 0px)`;

	return (
		<div className="intro-section">
			<div className="slide-up-wrapper"
				style={{
					position: windowWidth > 500 ? "fixed" : "",
					transform: windowWidth > 500 ? slideUpWrapperTransformDesktop : slideUpWrapperTransformUnset
				}}
			>
				<div className={`slide-right-wrapper${isLoading ? " init" : ""}${scrollPosition !== 0 ? " shifted" : ""}`}>
					<div className={`intro-text-main-wrapper${scrollPosition !== 0 ? " visible" : ""}`}
						style={{
							top: scrollPosition < windowHeight ? "0px" : `${(scrollPosition - windowHeight) / 3}px`
						}}
					>
						<div className="intro-text-wrapper">
							<p className={`intro-text main${scrollPosition !== 0 ? " first visible" : ""}`}>I'm a Front-End Web Developer</p>
						</div>
						<div className="intro-text-wrapper">
							<p className={`intro-text sub${scrollPosition !== 0 ? " second visible" : ""}`}>with a passion for building</p>
						</div>
						<div className="intro-text-wrapper">
							<p className={`intro-text sub${scrollPosition !== 0 ? " third visible" : ""}`}>beautiful, functional, web apps.</p>
						</div>
					</div>
					<div className="left" />
					<div className="title-text-main-wrapper">
						<div className="title-text-wrapper">
							<p className={`title-text ${titleTextIsVisible ? "visible" : ""}`} style={{ transitionDelay: "0s" }}>Hi,</p>
						</div>
						<div className="title-text-wrapper">
							<p className={`title-text ${titleTextIsVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>I'm</p>
						</div>
						<div className="title-text-wrapper">
							<p className={`title-text ${titleTextIsVisible ? "visible" : ""}`} style={{ transitionDelay: "0.7s" }}>
								Ashton<span className={`title-text dot ${titleTextIsVisible ? "visible" : ""}`}>.</span>
							</p>
						</div>
					</div>
					<div className="right" />
					<ScrollReminder isVisible={titleTextIsVisible && initializationIsComplete && scrollPosition === 0} />
				</div>
			</div>
		</div>

	);
}
