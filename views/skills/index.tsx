import React from "react";
import { Paper, Container, Grid } from "@material-ui/core";
import Image from "next/image";
import styled from "styled-components";
import {ViewTitleFont} from '../../components';

import git from "../../public/assets/skills/git.png";
import github from "../../public/assets/skills/github.png";
import gitlab from "../../public/assets/skills/gitlab.png";

import temp from "../../public/assets/skills/temp.jpeg";
import materialUi from "../../public/assets/skills/material-ui.png";
import mobx from "../../public/assets/skills/mobx.png";
import react from "../../public/assets/skills/react.png";
import recoil from "../../public/assets/skills/recoil.png";
import redux from "../../public/assets/skills/redux.png";
import reduxSaga from "../../public/assets/skills/reduxSaga.png";
import sass from "../../public/assets/skills/sass.png";

import slack from "../../public/assets/skills/slack.png";
import jira from "../../public/assets/skills/jira.png";
import confluence from "../../public/assets/skills/confluence.png";

import useScrollFadeIn from '../../lib/hooks/useScrollFadeIn';

const Wrapper = styled.div`
  display:inline-block;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  margin: 10px;
`;

const Skills: React.FC = () => {

	const animatedItem1 = useScrollFadeIn('left', 1.3, 0);
	const animatedItem2 = useScrollFadeIn('right', 1.3, 0.1);
	const animatedItem3 = useScrollFadeIn('up', 1.3, 0.2);
	const animatedItem4 = useScrollFadeIn('down', 1.3, 0.3);
	const animatedItem5 = useScrollFadeIn('left', 1.3, 0.4);
	const animatedItem6 = useScrollFadeIn('right', 1.3, 0.5);
	const animatedItem7 = useScrollFadeIn('up', 1.3, 0.6);
	const animatedItem8 = useScrollFadeIn('down', 1.3, 0.7);
	const animatedItem9 = useScrollFadeIn('up', 1.3, 0.8);
	const animatedItem10 = useScrollFadeIn('left', 1.3, 0);
	const animatedItem11 = useScrollFadeIn('right', 1.3, 0.1);
	const animatedItem12 = useScrollFadeIn('up', 1.3, 0.2);

	return (
		<div style={{ backgroundColor: "#def2f1", width: "100%", height: "fit-content", paddingTop:50,paddingBottom:50 }}>
			<Container>
				<Grid >
					<ViewTitleFont>
						Skills
					</ViewTitleFont>
				</Grid>
				<hr/>
				<Grid container>
					<Grid container item xs={12}>

						<Paper style={{ padding: 30, backgroundColor: "#feffff", marginBottom:30, marginTop:30 }}>
							<h2>
								FRONTEND
							</h2>
							<div>
								<Wrapper {...animatedItem1}>
									<ImageWrapper style={{ width: 300, height: 100 }} >
										<Image src={temp} alt={"temp"} layout={"fill"} objectFit={"contain"} />
									</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem2}>
								<ImageWrapper style={{ width: 120, height: 100 }} >
									<Image src={sass} alt={"sass"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem3}>
									<ImageWrapper style={{ width: 150, height: 100 }}>
										<Image src={react} alt={"react"} layout={"fill"} objectFit={"contain"} />
									</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem4}>
								<ImageWrapper style={{ width: 80, height: 80, margin: 20 }}>
									<Image src={materialUi} alt={"materialUi"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem5}>
								<ImageWrapper style={{ width: 70, height: 70, margin: 30 }}>
									<Image src={mobx} alt={"mobx"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem6}>
								<ImageWrapper style={{ width: 100, height: 100 }}>
									<Image src={recoil} alt={"recoil"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem7}>
								<ImageWrapper style={{ width: 150, height: 100 }}>
									<Image src={redux} alt={"redux"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem8}>
								<ImageWrapper style={{ width: 100, height: 100 }}>
									<Image src={reduxSaga} alt={"reduxSaga"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem9}>
								<ImageWrapper style={{ width: 100, height: 100 }}>
									<Image src={git} alt={"git"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
							</div>
						</Paper>
					</Grid>
					<Grid container item xs={12}>
						<Paper style={{ padding: 30, width: "100%" }}>
							<h2>
								COMMUNICATION
							</h2>
							<div>
								<Wrapper {...animatedItem10}>
								<ImageWrapper style={{ width: 150, height: 100 }} >
									<Image src={slack} alt={"slack"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem11}>
								<ImageWrapper style={{ width: 120, height: 100 }} >
									<Image src={jira} alt={"jira"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
								<Wrapper {...animatedItem12}>
								<ImageWrapper style={{ width: 250, height: 100 }} >
									<Image src={confluence} alt={"confluence"} layout={"fill"} objectFit={"contain"} />
								</ImageWrapper>
								</Wrapper>
							</div>
						</Paper>
					</Grid>
				</Grid>

			</Container>
		</div>

	);
};

export default Skills;
