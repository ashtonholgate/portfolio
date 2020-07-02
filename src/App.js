import React, { useState, useEffect } from 'react';
import './App.scss';
import { LoadingIcon } from './LoadingIcon';
import { IntroSection } from './sections/IntroSection';
import { AboutMeSection } from './sections/AboutMeSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [initializationIsComplete, setInitializationIsComplete] = useState(false);
	const [borderWidth, setBorderWidth] = useState(false);
	const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);

	const debounce = (func, wait) => {
		let timeout;

		return function executedFunction(...args) {
			const later = () => {
				timeout = null;
				func(...args);
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};

	const handleScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
		if (window.innerWidth <= 500) {
			setBorderWidth(0);
		} else if (window.innerWidth <= 768) {
			setBorderWidth(40);
		} else {
			setBorderWidth(50);
		}
	};

	useEffect(() => {
		handleResize();
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', debounce(handleScroll, 5), { passive: true });
		window.addEventListener('resize', handleResize, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1800);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => setTitleTextIsVisible(true), 2200);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => setInitializationIsComplete(true), 3200);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.scrollTo(0,0);
	}, [isLoading]);
	return (
		<div className={`app${isLoading ? " scroll-locked" : ""}`} style={{ "--border-width": `${borderWidth}px` }}>
			<div className="loading-screen">
				<LoadingIcon />
			</div>
			<div className={`white-border left${isLoading ? "" : " visible"}`} />
			<div className={`white-border top${isLoading ? "" : " visible"}`} />
			<div className={`white-border right${isLoading ? "" : " visible"}`} />
			<div className={`white-border bottom${isLoading ? "" : " visible"}`} />
			<>
				<IntroSection
					isLoading={isLoading}
					initializationIsComplete={initializationIsComplete}
					titleTextIsVisible={titleTextIsVisible}
					scrollPosition={scrollPosition}
					windowHeight={windowHeight}
					windowWidth={windowWidth}
				/>
				<>
					<AboutMeSection
						scrollPosition={scrollPosition}
						borderWidth={borderWidth}
						windowHeight={windowHeight}
						windowWidth={windowWidth}
					/>
					<ExperienceSection
						scrollPosition={scrollPosition}
						borderWidth={borderWidth}
						windowHeight={windowHeight}
						windowWidth={windowWidth}
					/>
					<ProjectsSection
						scrollPosition={scrollPosition}
						borderWidth={borderWidth}
						windowHeight={windowHeight}
						windowWidth={windowWidth}
					/>
				</>
			</>
		</div>
	);
}

export default App;
