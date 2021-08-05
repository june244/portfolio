import React from 'react';
import styled from 'styled-components';

const ContentFont = styled.h1`
				
	font-size: ${props => props.xl && '4vmin'};
  font-size: ${props => props.lg && '2vmin'};
  font-size: ${props => props.md && '1.5vmin'};
  font-size: ${props => props.sm && '1vmin'};
  font-size: ${props => props.xs && '.8vmin'};
	
	font-weight: ${props => props.w900 && '900'};
  font-weight: ${props => props.w800 && '800'};
  font-weight: ${props => props.w700 && '700'};
  font-weight: ${props => props.w600 && '600'};
  font-weight: ${props => props.w500 && '500'};
  font-weight: ${props => props.w400 && '400'};
  font-weight: ${props => props.w300 && '300'};
  font-weight: ${props => props.w200 && '200'};
  font-weight: ${props => props.w100 && '100'};
	
	color: black;
	font-family: Nanum Square Round Extra Bold;
`;

export default ContentFont;