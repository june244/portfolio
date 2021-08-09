import React from "react";
import { Container, Grid } from "@material-ui/core";
import { ViewTitleFont, ContentFont } from "../../components";

import Image from "next/image";

import nba from "../../public/assets/projects/nba.png";
import matcher from "../../public/assets/projects/matcher.png";
import portfolio from "../../public/assets/projects/portfolio.png";
import sysmaster1_0 from "../../public/assets/projects/sysmaster1_0.png";
import sysmaster1_1 from "../../public/assets/projects/sysmaster1_1.png";
import sysmaster1_2 from "../../public/assets/projects/sysmaster1_2.png";
import sysmaster2_0 from "../../public/assets/projects/sysmaster2_0.png";
import sysmaster2_1 from "../../public/assets/projects/sysmaster2_1.png";
import sysmaster2_2 from "../../public/assets/projects/sysmaster2_2.png";


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

	const animatedItem1 = useScrollFadeIn("center", 1.3, 0);
	const animatedItem2 = useScrollFadeIn("center", 1.3, 0);
	const animatedItem3 = useScrollFadeIn("center", 1.3, 0);
	const animatedItem4 = useScrollFadeIn("center", 1.3, 0);
	const animatedItem5 = useScrollFadeIn("center", 1.3, 0);
	const animatedItem6 = useScrollFadeIn("center", 1.3, 0);

	const animatedItem7 = useScrollFadeIn("center", 1.3, 0);
	const animatedItem8 = useScrollFadeIn("center", 1.3, 0);
	const animatedItem9 = useScrollFadeIn("center", 1.3, 0);
	const animatedItem10 = useScrollFadeIn("center", 1.3, 0);

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
				<Grid container>
					<TextGrid item xs={12} md={4} {...animatedItem1} >
						<ContentFont style={{ color: "#FEFFFF" }} xl>
							SysMaster (with TOP)
						</ContentFont>
						<ul style={{ listStyle: "none" }}>
							<li>
								<ContentFont style={{ color: "#17252a" }} lg>
									TMAX Database tibero monitoring tool
								</ContentFont>
							</li>
						</ul>
						<ul>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									데이터베이스의 다양한 지표들을 시각화하여 제공
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									TMAX에서 개발한 프론트엔드 개발 프레임워크인 top를 사용
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Frontend : 100%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Publishing : 100%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									기술 스택: top, javascript
								</ContentFont>
							</li>
						</ul>
					</TextGrid>
					<ImageGrid item xs={12} md={8} {...animatedItem2}>
						<div style={{ position: "relative" }}>
							<Overlay style={{ maxWidth: 678 }}>
								<Image src={sysmaster1_0} alt={"sysmaster1_0"} />
								<ContentFont style={{
									position: "absolute",
									top: "30%",
									left: "25%",
									color: "black",
									borderBottomColor: "black",
									fontSize: "3vmin",
									margin: ".5vmin",
								}}>SysMaster7DB with top</ContentFont>
								<ContentFont style={{
									position: "absolute",
									top: "45%",
									left: "40%",
									color: "black",
									border: "0px",
									fontSize: "2vmin",
								}}>2020.2.01 ~ </ContentFont>
								<ContentFont style={{
									position: "absolute",
									top: "60%",
									left: "40%",
									color: "black",
									border: "0px",
									fontSize: "2vmin",
								}}>No Link </ContentFont>
							</Overlay>
						</div>
					</ImageGrid>
					<Grid item xs={12}>
						<hr style={{ marginTop: "3vh", marginBottom: "3vh" }} />
					</Grid>
					<TextGrid item xs={12} md={4} {...animatedItem3}>
						<ContentFont style={{ color: "#FEFFFF" }} xl>
							SysMaster (with react)
						</ContentFont>
						<ul style={{ listStyle: "none" }}>
							<li>
								<ContentFont style={{ color: "#17252a" }} lg>
									TMAX Database tibero monitoring tool
								</ContentFont>
							</li>
						</ul>
						<ul>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									데이터베이스의 다양한 지표들을 시각화하여 제공
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									top.js가 deprecate되면서 자사의 제품들을 react로 변환하는 작업을 혼자서 진행
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Frontend : 100%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Publishing : 100%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									기술 스택: react, javascript, mobx, material ui, css
								</ContentFont>
							</li>
						</ul>
					</TextGrid>
					<ImageGrid item xs={12} md={8} {...animatedItem4}>
						<div style={{ position: "relative" }}>
							<Overlay style={{ maxWidth: 678 }}>
								<Image src={sysmaster2_1} alt={"sysmaster2_1"} />
								<ContentFont style={{
									position: "absolute",
									top: "30%",
									left: "25%",
									color: "black",
									borderBottomColor: "black",
									fontSize: "3vmin",
									margin: ".5vmin",
								}}>SysMaster7DB with react</ContentFont>
								<ContentFont style={{
									position: "absolute",
									top: "45%",
									left: "40%",
									color: "black",
									border: "0px",
									fontSize: "2vmin",
								}}>2020.11.01 ~ </ContentFont>
								<ContentFont style={{
									position: "absolute",
									top: "60%",
									left: "40%",
									color: "black",
									border: "0px",
									fontSize: "2vmin",
								}}>No Link </ContentFont>
							</Overlay>
						</div>
					</ImageGrid>
					<Grid item xs={12}>
						<hr style={{ marginTop: "3vh", marginBottom: "3vh" }} />
					</Grid>
					<TextGrid item xs={12} md={4} {...animatedItem5} >
						<ContentFont style={{ color: "#FEFFFF" }} xl>
							NBA Analysis
						</ContentFont>
						<ul style={{listStyle:'none'}}>
							<li>
								<ContentFont style={{ color: "#17252a" }} lg>
									농구 통계 정보 분석 사이트
								</ContentFont>
							</li>
						</ul>

						<ul>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									NBA 선수들의 정보와 매일 매일의 게임 정보를 시각화하여 제공.
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									TeamCareLab 그룹으로 처음 시작했던 프로젝트입니다.
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Frontend : 100%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Publishing : 0%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									data 수집 문제로 서비스 중단
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									사진 클릭 시 이동
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									기술 스택: react, javascript, sass, redux, redux-saga, d3.js, apex-chart, high-charts
								</ContentFont>
							</li>
						</ul>
					</TextGrid>
					<ImageGrid item xs={12} md={8}  {...animatedItem6}>
						<div style={{ position: "relative" }}>
							<a href="https://nba.teamcarelab.com" target="_blank" rel="noopener noreferrer">
								<Overlay style={{ maxWidth: 678 }}>
									<Image src={nba} alt={"nba"} />
									<ContentFont style={{
										position: "absolute",
										top: "30%",
										left: "40%",
										color: "black",
										borderBottomColor: "black",
										fontSize: "3vmin",
										margin: ".5vmin",
									}}>NBA Analysis</ContentFont>
									<ContentFont style={{
										position: "absolute",
										top: "45%",
										left: "35%",
										color: "black",
										border: "0px",
										fontSize: "2vmin",
									}}>2020.12.03 ~
										2021.04.25</ContentFont>
								</Overlay>
							</a>
						</div>
					</ImageGrid>
					<Grid item xs={12}>
						<hr style={{ marginTop: "3vh", marginBottom: "3vh" }} />
					</Grid>
					<TextGrid item xs={12} md={4} {...animatedItem7}>
						<ContentFont style={{ color: "#FEFFFF" }} xl>
							LOL MATCHER
						</ContentFont>
						<ul style={{ listStyle: "none" }}>
							<li>
								<ContentFont style={{ color: "#17252a" }} lg>
									LOL 전적정보 조회 및 game buddy 찾기
								</ContentFont>
							</li>
						</ul>
						<ul>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									LOL 유저들의 게임 정보들을 시각화하여 제공
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									게임 친구를 매칭하는 서비스 준비중
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Frontend : 100%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Publishing : 0%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									현재 개발 진행중...
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									사진 클릭 시 이동
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									기술 스택: react, javascript, styled-component, recoil, apex-chart
								</ContentFont>
							</li>
						</ul>
					</TextGrid>
					<ImageGrid item xs={12} md={8} {...animatedItem8}>
						<div style={{ position: "relative" }}>
							<a href="https://lol.matcher.games" target="_blank" rel="noopener noreferrer">
								<Overlay style={{ maxWidth: 678 }}>
									<Image src={matcher} alt={"matcher"} />
									<ContentFont style={{
										position: "absolute",
										top: "30%",
										left: "40%",
										color: "black",
										borderBottomColor: "black",
										fontSize: "3vmin",
										margin: ".5vmin",
									}}>LOL MATCHER</ContentFont>
									<ContentFont style={{
										position: "absolute",
										top: "45%",
										left: "40%",
										color: "black",
										border: "0px",
										fontSize: "2vmin",
									}}>개발 진행중...</ContentFont>
								</Overlay>
							</a>
						</div>
					</ImageGrid>
					<Grid item xs={12}>
						<hr style={{ marginTop: "3vh", marginBottom: "3vh" }} />
					</Grid>
					<TextGrid item xs={12} md={4} {...animatedItem9}>
						<ContentFont style={{ color: "#FEFFFF" }} xl>
							PORTFOLIO
						</ContentFont>
						<ul style={{ listStyle: "none" }}>
							<li>
								<ContentFont style={{ color: "#17252a" }} lg>
									포트폴리오 페이지
								</ContentFont>
							</li>
						</ul>

						<ul>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Nextjs와 typescript 공부를 하기 위해 시작
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Frontend : 100%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									Publishing : 100%
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									사진 클릭 시 이동
								</ContentFont>
							</li>
							<li>
								<ContentFont style={{ color: "#17252a" }} md>
									기술 스택: react, typescript, nextjs, styled-component
								</ContentFont>
							</li>
						</ul>
					</TextGrid>
					<ImageGrid item xs={12} md={8} {...animatedItem10}>
						<div style={{ position: "relative" }}>
							<a href="https://kyj-portfolio.com" target="_blank" rel="noopener noreferrer">
								<Overlay>
									<Image src={portfolio} alt={"portfolio"} />
									<ContentFont style={{
										position: "absolute",
										top: "30%",
										left: "40%",
										color: "white",
										borderBottomColor: "white",
										fontSize: "3vmin",
										margin: ".5vmin",
									}}>PORTFOLIO</ContentFont>
									<ContentFont style={{
										position: "absolute",
										top: "45%",
										left: "35%",
										color: "white",
										border: "0px",
										fontSize: "2vmin",
									}}>2021.07.30 ~
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
