
// Util packages
import Icon from '../utils/icon';
import button from '../../styles/scss/blocks/button.module.scss';

// Define the props for the CopyBlock component
interface CopyBlockProps {
	containerClass: string;
	iconClass: string;
	icon: any;
	title: string;
	copy: string;
	hasLink?: boolean;
}

// This will return the copy block component
export default function CopyBlock({
									  containerClass,
									  iconClass,
									  icon, // Keep it as a string if you're using a string for the icon
									  title,
									  copy,
									  hasLink = false,
								  }: CopyBlockProps) {
	const handleDownload = () => {
		const pdfUrl = '/Etienne_GEORGIOU_CV.pdf';
		const link = document.createElement('a');
		link.href = pdfUrl;
		link.download = 'Etienne_GEORGIOU_CV.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<div className={containerClass}>
      <span className={iconClass}>
        <Icon icon={icon} />
      </span>
			<h3>{title}</h3>
			<p>{copy}</p>
			{hasLink && <button
							className={`button ${button.secondary} w-fit`}
							onClick={handleDownload}
						>
								RIGHT HERE
						</button>}
		</div>
	);
}
