
import {useEffect, useState} from 'react';

import Container from '../structure/container';
import Icon from '../utils/icon';

import css from '../../styles/scss/structure/footer.module.scss';

import content from '../../content/section/footer.json';
import settings from '../../content/_settings.json';


export default function Footer(): JSX.Element {

	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections + " flex justify-center items-center"}>
					<ul className={css.social}>
						<li>
							<h4>Social</h4>
						</li>
						<li className="flex flex-col">
							{content.social.map(({ url, icon }, index) => {
								return (
									// <a key={index} href={url} rel="noreferrer" target="_blank">
									// 	<Icon icon={['fab', icon] as any} /> 
									// </a>
									<a key={index} href={url} className="my-2">{icon}</a>
								);
							})}
						</li>

					</ul>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in=""></canvas>
		</footer>
	);
}
