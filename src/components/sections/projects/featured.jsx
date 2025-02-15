
import FeaturedProject from '../../blocks/projects/featured'


// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title'

import css from '../../../styles/scss/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'
import { useEffect } from 'react';

{/* Featured Projects */}
export default function FeaturedProjects({onLoad}) {
	useEffect(() => onLoad(), [])
	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Finalised Projects"
					preTitle="Full Stack and Data managing"
					subTitle="Continuous improvement"
				/> 				{
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}