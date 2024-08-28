
// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React, { useEffect } from "react";

export default function Home({onLoad} : {onLoad: () => void}) {
	useEffect(() => onLoad(), []);
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I am 29 years old, I grew up in Annecy, and I have been living in Paris for the past 5 years. To describe myself in two words, I am passionate about sports and computer sciences.
Regarding my background, I graduated from the Arts et Métiers engineering school in 2018, and I worked as an aerospace engineer for 3 years before I decided to switch to the field of computer science. I completed the core curriculum at École 42 in early July 2023. My latest project involved setting up a website that included a network game and a chat feature. This experience ignited my passion for full-stack development and giving life to tangible projects.
"
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/IMG_0671.JPG" width={600} height={800} alt="Etienne G"   loading="eager" />
					</div>
					<div className={about.copy}>
						<CopyBlock
							title="WHY ME ?"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'user' ]}
							copy="During my studies, I acquired rigorous work methods that I believe are essential in our field. Listening, sharing, and collective growth are also fundamental values that my higher education instilled in me. My experience as an engineer allowed me to adapt to various professional environments and develop technical reflexes and project management skills. I am now able to apply all these values and skills to the various web development and data projects I have completed, as well as to future projects."
						/>
						<CopyBlock
							title="CURRICULUM VITAE"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'book']}
							copy="To get my resume, you can download it by clicking"
							hasLink={true}
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}
const methods = [
	{ key: 'machinelearning', name: 'Machine Learning', type: 'fad', icon: 'devicon' },
	{ key: 'artificialintelligence', name: 'Artificial Intelligence', type: 'fad', icon: 'devicon' },
	{ key: 'deeplearning', name: 'Deep Learning', type: 'fad', icon: 'devicon' },
	{ key: 'neuralnetworks', name: 'Neural Networks', type: 'fad', icon: 'devicon' },

];
