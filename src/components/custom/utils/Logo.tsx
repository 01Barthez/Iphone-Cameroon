import React from 'react'
import { Link } from 'react-router-dom'
import LogoDark from 'public/images/LogoDark.svg'
import LogoLight from 'public/images/LogoLight.svg'
import { useTheme } from '@/hooks/use-theme';
import type { ILogoProps } from '@/interface/interface';


const Logo: React.FC<ILogoProps> = ({ isDarkZone = false }) => {
	const { theme } = useTheme();

	const isDarkMode = theme === "dark" || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
	const LogoSrc = isDarkMode || isDarkZone ? LogoLight : LogoDark;

	return (
		<Link to='/' className='inline-block w-24 '>
			<img
				src={LogoSrc}
				alt='Logo Iphone Cameroon'
				className='w-full h-full object-contain'
			/>
		</Link>
	)
}

export default Logo
