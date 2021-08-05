import React from "react";
import { Container, Grid } from "@material-ui/core";
import { ViewTitleFont, ContentFont } from "../../components";

import Image from "next/image";

import nba from "../../public/assets/projects/nba.png";
import matcher from "../../public/assets/projects/matcher.png";
import portfolio from "../../public/assets/projects/portfolio.png";


import styled from "styled-components";
import useScrollFadeIn from "../../lib/hooks/useScrollFadeIn";

const Overlay = styled.div`
				
  display: flex;
  align-items: center; /* 수직 정렬 */
  flex-direction: row; /* default: row */
  justify-content: center;
  background-color: #DEF2F1;
  border-radius: 5px;
	margin: auto;
	padding: .5vmin;
	width: 100%;
	height: 100%;
	max-width: 678px;
	
  h1, h2 {
    opacity: 0;
  }
  &:hover {

    h1 {
      opacity: 1;
      border-bottom: 5px black solid;
    }

    h2 {
      opacity: 1;
    }

    div {
      -webkit-filter: blur(10px);
      filter: blur(10px) grayscale(80%);
    }
  }

`;

const TextGrid = styled(Grid)`
	padding-right: 1vw;
`;

const ImageGrid = styled(Grid)`
	padding: 1.2vmin;
`;

const Projects: React.FC = () => {

	const animatedItem1 = useScrollFadeIn('center', 1.3, 0);
	const animatedItem2 = useScrollFadeIn('center', 1.3, 0);
	const animatedItem3 = useScrollFadeIn('center', 1.3, 0);
	const animatedItem4 = useScrollFadeIn('center', 1.3, 0);
	const animatedItem5 = useScrollFadeIn('center', 1.3, 0);
	const animatedItem6 = useScrollFadeIn('center', 1.3, 0);

	return (
		<div
			style={{ backgroundColor: "#3aafa9", width: "100%", height: "fit-content", paddingTop: 50, paddingBottom: 50 }}>
			<Container>
				<Grid container>
					<ViewTitleFont style={{ color: "#FEFFFF" }}>
						PROJECTS
					</ViewTitleFont>

				</Grid>
				<hr style={{ marginTop: "3vh", marginBottom: "3vh" }} />
				<Grid container >
					<TextGrid item xs={12} md={4} {...animatedItem1} >
						<ContentFont style={{ color: "#FEFFFF" }} xl>
							NBA Analysis
						</ContentFont>
						<ContentFont style={{ color: "#17252a" }} lg>
							농구 통계 정보 분석 사이트
						</ContentFont>
						<ContentFont style={{ color: "#17252a" }} md>
							* NBA 선수들의 정보와 매일 매일의 게임 정보를 시각화하여 제공<br/>
							* Frontend : 100%<br/>
							* Publishing : 0%<br/>
							* data 수집 문제로 서비스 중단<br/>
							* 기술 스택: react, javascript, sass, redux, redux-saga, d3.js, apex-chart
						</ContentFont>
					</TextGrid>
					<ImageGrid item xs={12} md={8}  {...animatedItem4}>
						<div style={{ position: "relative" }}>
							<a href="https://nba.teamcarelab.com" target="_blank" rel="noopener noreferrer">
								<Overlay style={{  maxWidth: 678 }}>
									<Image src={nba} alt={"nba"} />
									<ContentFont style={{ position: "absolute", top: "30%", left: "40%", color: "black",borderBottomColor:'black',fontSize:"3vmin", margin:".5vmin" }}>NBA Analysis</ContentFont>
									<ContentFont style={{ position: "absolute", top: "45%", left: "35%", color: "black",border:"0px", fontSize:"2vmin" }}>2020.12.03 ~
										2021.04.25</ContentFont>
								</Overlay>
							</a>
						</div>
					</ImageGrid>
					<Grid item xs={12}>
						<hr style={{ marginTop: "3vh", marginBottom: "3vh" }} />
					</Grid>
					<TextGrid item xs={12} md={4} {...animatedItem2}>
						<ContentFont style={{ color: "#FEFFFF" }} xl>
							LOL MATCHER
						</ContentFont>
						<ContentFont style={{ color: "#17252a" }} lg>
							LOL 전적정보 조회 및 game buddy 찾기
						</ContentFont>
						<ContentFont style={{ color: "#17252a" }} md>
							* LOL 유저들의 게임 정보들을 시각화하여 제공<br/>
							* 게임 친구를 매칭하는 서비스 준비중<br/>
							* Frontend : 100%<br/>
							* Publishing : 0%<br/>
							* 현재 개발 진행중...<br/>
							* 기술 스택: react, javascript, styled-component, recoil, apex-chart
						</ContentFont>
					</TextGrid>
					<ImageGrid item xs={12} md={8} {...animatedItem5}>
						<div style={{ position: "relative" }}>
							<a href="https://lol.matcher.games" target="_blank" rel="noopener noreferrer">
								<Overlay style={{ maxWidth: 678 }}>
									<Image src={matcher} alt={"matcher"} />
									<ContentFont style={{ position: "absolute", top: "30%", left: "40%", color: "black",borderBottomColor:'black',fontSize:"3vmin", margin:".5vmin" }}>LOL MATCHER</ContentFont>
									<ContentFont style={{ position: "absolute", top: "45%", left: "40%", color: "black",border:"0px", fontSize:"2vmin" }}>개발 진행중...</ContentFont>
								</Overlay>
							</a>
						</div>
					</ImageGrid>
					<Grid item xs={12}>
						<hr style={{ marginTop: "3vh", marginBottom: "3vh" }} />
					</Grid>
					<TextGrid item xs={12} md={4} {...animatedItem3}>
						<ContentFont style={{ color: "#FEFFFF" }} xl>
							PORTFOLIO
						</ContentFont>
						<ContentFont style={{ color: "#17252a" }} lg>
							포트폴리오 페이지
						</ContentFont>
						<ContentFont style={{ color: "#17252a" }} md>
							* Nextjs와 typescript 공부를 하기 위해 시작<br/>
							* Frontend : 100%<br/>
							* Publishing : 100%<br/>
							* 기술 스택: react, typescript, nextjs, styled-component
						</ContentFont>
					</TextGrid>
					<ImageGrid item xs={12} md={8} {...animatedItem6}>
						<div style={{ position: "relative" }}>
							<a href="https://lol.matcher.games" target="_blank" rel="noopener noreferrer">
								<Overlay>
									<Image src={portfolio} alt={"portfolio"} />
									<ContentFont style={{ position: "absolute", top: "30%", left: "40%", color: "white", borderBottomColor:'white',fontSize:"3vmin", margin:".5vmin" }}>PORTFOLIO</ContentFont>
									<ContentFont style={{ position: "absolute", top: "45%", left: "35%", color: "white", border:"0px",fontSize:"2vmin" }}>2021.07.30 ~
										2021.08.11
									</ContentFont>
								</Overlay>
							</a>
						</div>
					</ImageGrid>
				</Grid>
			</Container>

		</div>

	);
};

export default Projects;