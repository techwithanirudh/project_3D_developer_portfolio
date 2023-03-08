import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className='xs:w-[250px] w-full'>
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
			>
				<img
					src={icon}
					alt='web-development'
					className='w-16 h-16 object-contain'
				/>

				<h3 className='text-white text-[20px] font-bold text-center'>
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				I'm a young and passionate developer who holds the distinction of being the world's youngest Microsoft Azure AI certified and 2nd youngest Microsoft PowerApps certified. With a knack for developing AI and automation solutions, I excel at building website UI interfaces using React and UI component libraries such as TailwindCSS and MUI. Additionally, I have experience as a backend developer, utilizing NodeJS and Flask to build functional apps.
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
