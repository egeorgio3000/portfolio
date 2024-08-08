
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'

// Section scss
import technical from '../../../styles/scss/sections/index/about.module.scss'


export default function Technical() {
	return (
		<Section classProp={`${technical.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hard Skills"
					subTitle="Even though I specialized myself in Node.js full-stack development, for the last 3 years I improved my technical stack in several domains as web development (obviously), but also in data management and other computer langages"
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>
						<BadgesBlock
							title="Full-stack development"
							copy="My main technical stack. With this set of tools I am able to build a complete Saas application and deploy it to production on a VPS"
							list={web}
							block="web"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>
						<BadgesBlock
							title="Data management"
							copy="In addition to the web development, I am passionate about data analysis, data vizualisation and machine learning. I improved my skills by using LLM and building regressions in python"
							list={data}
							block="data"
							fullContainer="fullContainer"
							icon="database"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

						<BadgesBlock
							title="Others"
							copy="During my studies, I have developed several projects using procedural langage as C or oriented-object langage as C++"
							list={other}
							block="other"
							fullContainer="fullContainer"
							icon="terminal"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

					</div>
					<div className={`${technical.image} ${technical.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background"   loading="eager" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}
{/*Badge Block*/}
const web = [
	{ key: 'nodejs', 	name: 'Node.js', 			type: 'devicon' },
	{ key: 'nextjs', 		name: 'Next.js', 				type: 'devicon' },
	{ key: 'reactjs', name: 'React.js', type: 'devicon' },
	{ key: 'nestjs', 		name: 'NestJS', 			type: 'devicon' },
	{key:'postgresql',name:'PostgreSQL',type:'devicon'},
	{key:'googlecloud',name:'OVH VPS',type:'devicon'},
	{key:'docker',name:'Docker',type:'devicon'},
	{key:'typescript',name:'Typescript',type:'devicon'},
	{key:'tailwindcss',name:'Tailwindcss',type:'devicon'},
]

const data = [
	{ key: 'python', 	name: 'Python', 			type: 'devicon' },
	{ key: 'pandas', 		name: 'Pandas', 				type: 'devicon' },
	{ key: 'matplotlib', name: 'Matplotlib', type: 'devicon' },
	{ key: 'numpy', 		name: 'Numpy', 			type: 'devicon' },
	{key:'pytorch',name:'Pytorch',type:'devicon'},
	{key:'sqlalchemy',name:'SQLalchemy',type:'devicon'},
	{key:'sqldeveloper',name:'SQL',type:'devicon'}
]
const other = [
	{ key: 'c', name: 'C', type: 'devicon' },
	{ key: 'cplusplus', name: 'C++', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'bash', name: 'bash', type: 'devicon' },
	{ key: 'godot', name: 'Godotscript', type: 'devicon' }
];