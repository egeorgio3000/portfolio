import React, { useState, useEffect } from 'react';
import colors from '../src/content/index/_colors.json';
import TitleIndex from './title.index';

// Import your components with dynamic import
import dynamic from 'next/dynamic';
import LoadingAnim from "../src/components/intro/loadinganim";
import TimeLine from "../src/components/sections/index/timeline";
const Hero = dynamic(() => import('../src/components/sections/index/hero'));
const Looking = dynamic(() => import('../src/components/sections/index/looking'));
const About = dynamic(() => import('../src/components/sections/index/home'));
const Technical = dynamic(() => import('../src/components/sections/index/technical'));
const Career = dynamic(() => import('../src/components/sections/index/optional/career'));
const FeaturedProjects = dynamic(() => import('../src/components/sections/projects/featured'));
const Color = dynamic(() => import('../src/components/utils/page.colors'));
import settings from '../src/content/_settings.json';
import GithubGraphSection from "../src/components/sections/index/github.graph";
import { useScroll } from '../hooks/ScrollContext';
interface HomePageProps {
	spacing: string[];
}

export default function HomePage({ spacing }: HomePageProps) {
	// Use a state variable to track whether components are loaded
	const [componentsLoaded, setComponentsLoaded] = useState({
        hero: false,
        about: false,
        projects: false,
        skills: false,
		all: false
    });
	const {scrollRef} = useScroll();
	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setComponentsLoaded(true);
	// 	}, 2000);

	// 	return () => clearTimeout(timer);
	// }, []);
	useEffect(() => {
        const allLoaded = Object.values(componentsLoaded).slice(0, 4).every(Boolean);
        if (allLoaded) {
            setTimeout(() => {
                setComponentsLoaded((prev) => ({ ...prev, all: true }));
            }, 1000); // Optional delay to keep the loading screen for a bit
        }
    }, [componentsLoaded]);



	const renderContent = () => (
		<div ref={scrollRef}>
			<Hero onLoad={() => setComponentsLoaded((prev) => ({ ...prev, hero: true }))}/>
			{/* <Looking /> */}
			<div id="ABOUTME"><About onLoad={() => setComponentsLoaded((prev) => ({ ...prev, about: true }))}/></div>
			{/* <GithubGraphSection/> */}

			<div id="PROJECTS"><FeaturedProjects onLoad={() => setComponentsLoaded((prev) => ({ ...prev, projects: true }))}/></div>
			<div id="SKILLS"><Technical onLoad={() => setComponentsLoaded((prev) => ({ ...prev, skills: true }))}/></div>
			{/*	<TimeLine/> -> Still In Development*/}
			{/* <Career /> */}
		</div>
	);

	return (
		<div>
			<TitleIndex />
			<Color colors={colors} />

			{/* Conditionally render components or loading message */}
			{renderContent()}
			{!componentsLoaded.all && (
				<div style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "black",
						zIndex: 1000
					}}><LoadingAnim /></div>
			)}
		</div>
	);
}
