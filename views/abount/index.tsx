import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import { ViewTitleFont, ContentFont } from "../../components";

const CenterGrid = styled(Grid)`
  text-align: center;
`;

type AboutContentProps = {
	title: string,
	icon:React.ReactElement,
	contents: Array<string>
}

const AboutContent : React.FC<AboutContentProps> = ({ title, icon, contents }) => {
	return (
		<CenterGrid container item xs={6} md={4}>
			<Grid item style={{ marginLeft: "auto", marginTop: "auto", marginBottom: "auto", marginRight: 10 }}>
				{icon}
			</Grid>
			<Grid item style={{ marginRight: "auto", marginTop: "auto", marginBottom: "auto" }}>
				<ContentFont lg>{title}</ContentFont>
			</Grid>
			<Grid item xs={12}>
				{contents.map(content => {
					return <ContentFont md key={content}>{content}</ContentFont>
				})}
			</Grid>
		</CenterGrid>
	)
}

const About: React.FC = () => {
	return (
		<div style={{ paddingTop: '2vh', paddingBottom: '2vh' }}>
			<Container>
				<Grid>
					<ViewTitleFont>ABOUT ME</ViewTitleFont>
				</Grid>
				<hr />
				<Grid container>
					<Grid item xs={12}>
						<ContentFont md>INFO</ContentFont>
					</Grid>
					<AboutContent title={'이름'} icon={<PersonSharpIcon />} contents={['김용준']}/>
					<AboutContent title={'생년월일'} icon={<DateRangeRoundedIcon />} contents={['94.04.10']}/>
					<AboutContent title={'주소지'} icon={<LocationOnRoundedIcon />} contents={['서울특별시 관악구']}/>
					<AboutContent title={'이메일'} icon={<ContactMailRoundedIcon />} contents={['kyjune9993@gmail.com']}/>
					<AboutContent title={'학력'} icon={<BorderColorRoundedIcon />} contents={['서강대학교(학사/석사)','컴퓨터공학과']}/>
					<AboutContent title={'회사'} icon={<BusinessRoundedIcon />} contents={['티맥스 데이터']}/>
				</Grid>
				<hr />
				<Grid container>
					<CenterGrid>
						<ContentFont md>I AM...</ContentFont>
					</CenterGrid>
					<ContentFont md>
						안녕하세요. 웹 프론트엔드 2년차 개발자 김용준입니다.
						컴퓨터에 대해 공부하고 싶어 서강대학교 컴퓨터공학과에 진학을 하였고, 공부를 좀 더 해보고 싶은 마음에 서강대학교 데이터베이스 연구실에서 Differential Privacy라는 보안 기법을 연구하고 석사학위를 취득했습니다.
						학교를 졸업한 뒤에는 티맥스 데이터에 취직하여 전문연을 시작하였습니다. 티맥스 데이터에 와서 맡은 업무는 데이터베이스 모니터링 프로그램을 개발하는 일이었습니다. 그 중에서도 저는 프론트엔드 부문을 맡아 개발을 시작하였습니다.
						처음에는 top.js라는 자사의 소프트웨어를 이용하여 개발을 시작하였고, 이 과정에서 프론트엔드에 관심을 가지게 되어 혼자서 공부를 시작하게 되었습니다. 그러던 중 운좋게도 회사의 다른 동료들과 TeamCareLab
						이라는 그룹을 만들어 퇴근 후에도 사이드 프로젝트를 진행하면서 react를 공부하고 있었습니다. 그러던 와중에 회사에서 사용하던 top.js를 react로 전환하게 되었고, 이를 맡아 성공적으로 진행하였습니다.
						현재는 회사일과 병행하며 계속해서 사이드 프로젝트를 진행하고 공부하며 실력을 늘리고 있습니다.
					</ContentFont>

				</Grid>
			</Container>
		</div>


	);
};

export default About;
