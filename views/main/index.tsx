import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import styled from "styled-components";
import useScroll from "../../lib/hooks/useScroll";
import ContentFont from "../../components/ContentFont";

const TopbarWrapper = styled.div`
  background-image: url("/assets/main/main-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  height: 50vh;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${props => props.$trigger ? "#17252A" : "inherit"} !important;
  position: sticky;

`;

const TitleWrapper = styled.div`
  font-size: 1vmin !important;
  height: 100%;
  left: 50%;
  position: absolute;
  top: 25%;
  transform: translate(-50%, -50%);
  width: 80vmin;

  & > div {
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  & > div div {
    padding: 2vmin 0;
    position: absolute;
  }

  & > div div span {
    display: block;
  }

  & > div.text-top {
    border-bottom: 1vmin solid white;
    animation: typing .5s steps(40, end);
    top: 0;
  }

  & > div.text-top div {
    animation: showTopText 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);
  }

  & > div.text-bottom {
    bottom: 0;
  }

  & > div.text-bottom div {
    animation: showBottomText 0.5s;
    animation-delay: 1.75s;
    animation-fill-mode: forwards;
    top: 0;
    transform: translate(0, -100%);
  }
`;

const MainText = styled(ContentFont)`
  color: white !important;
  text-shadow: 2px 3px 2px #1f2833;
`;

const MenuText = styled(ContentFont)`
  margin-right: 1rem;
  margin-left: 1rem;
  color: #FEFFFF !important;
  cursor: pointer;
  font-family: dohyeon-reg !important;

  &:hover {
    background: linear-gradient(to right, #FFFFFF 10%, #3aafa9 50%, #def2f1 80%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 1.5s linear infinite;
    display: inline-block;

  }
`;

type scroll = {
	toTop: Function;
	about: Function;
	contact: Function;
	projects: Function;
	skills: Function;
}

type MainProps = {
	scrollTo: scroll;
}

const Main: React.FC<MainProps> = (props) => {

	const { scrollTo: { toTop, about, contact, projects, skills } } = props;

	const { y, per } = useScroll();

	return (
		<TopbarWrapper>
			<StyledAppBar $trigger={y > 64}>
				<Container>
					<Toolbar>
						<MenuText onClick={toTop} lg w700>PORTFOLIO</MenuText>
						<div style={{ width: "100%" }} />
						<MenuText onClick={about} lg w700>ABOUT</MenuText>
						<MenuText onClick={skills} lg w700>SKILLS</MenuText>
						<MenuText onClick={projects} lg w700>PROJECTS</MenuText>
						<MenuText onClick={contact} lg w700>CONTACT</MenuText>
					</Toolbar>
				</Container>
				<hr style={{ margin: 0, padding: 0, border: "solid 2px white", width: `${per}%` }} />
			</StyledAppBar>

			<Container style={{ padding: "150px" }}>
				<TitleWrapper>
					<div className="text-top">
						<div>
							<span>
								<MainText xl>
									안녕하세요, 김용준입니다.
								</MainText>
							</span>
							<span>
								<MainText xl>
									저는 2년차 프론트엔드 개발자입니다
								</MainText>
							</span>
						</div>
					</div>
					<div className="text-bottom">
						<div>
							<MainText xl>
								제 포트폴리오 페이지에 오신 걸 환영합니다.
							</MainText>
						</div>
					</div>
				</TitleWrapper>
			</Container>
		</TopbarWrapper>
	);
};

export default Main;



