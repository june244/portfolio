import React, { useRef } from "react";
import { Main,About, Skills, Projects, Contact } from "../views";

const scrollToRef = ref => window.scrollTo({ top: ref.current.offsetTop - 64, behavior: "smooth" });

const Index: React.FC = () => {

	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	const scrollTo = {
		toTop: () => window.scrollTo({top:0,behavior:'smooth'}),
		about: () => scrollToRef(aboutRef),
		skills: () => scrollToRef(skillsRef),
		projects: () => scrollToRef(projectsRef),
		contact: () => scrollToRef(contactRef),
	};


	return (
		<>
			<Main scrollTo={scrollTo} />
			<div ref={aboutRef}>
				<About />
			</div>
			<div ref={skillsRef}>
				<Skills />
			</div>
			<div ref={projectsRef}>
				<Projects />
			</div>
			<div ref={contactRef}>
				<Contact />
			</div>
		</>
	);
};
export default Index;
