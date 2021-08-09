import React from "react";
import { ContentFont } from "../../components";


type ContactLinkProps = {
	link: string,
	text: string
}

const ContactLink : React.FC<ContactLinkProps> = ({link,text}) => {
	return (
		<div>
			<a href={link} style={{ textDecoration: "none" }}>
				<ContentFont style={{ color: "white" }} lg>
					{text}
				</ContentFont>
			</a>
		</div>
	);
}

const Contact: React.FC = () => {
	return (
		<div style={{ backgroundColor: "#2b7a78", textAlign: "center", paddingTop: "5vh", paddingBottom: "2vh" }}>
			<ContactLink link={"mailto:kyjune9993@gmail.com"} text={"메일 보내기"}/>
			<ContactLink link={"https://home.teamcarelab.com"} text={"TEAM CARE LAB"}/>
			<ContactLink link={"https://github.com/june244"} text={"GITHUB"}/>
			<div style={{ marginTop: "3vh" }}>
				<ContentFont style={{ color: "white" }} md>
					<u>
						@ 2021. KYJ. All rights reserved.
					</u>
				</ContentFont>
			</div>
		</div>

	);
};

export default Contact;
