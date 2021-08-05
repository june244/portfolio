import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'dohyeon-reg';
    src: url('fonts/DoHyeon-Regular.ttf') format('truetype');
  }
	
  @font-face {
    font-family: 'Nanum Square Round Extra Bold'; src: url("fonts/NanumSquareRoundEB.ttf") format('truetype');
  }


  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  @keyframes typing {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
	
  @keyframes showTopText {
    0% { transform: translate3d(0, 100%, 0); }
    40%, 60% { transform: translate3d(0, 50%, 0); }
    100% { transform: translate3d(0, 0, 0); }
  }
	
  @keyframes showBottomText {
    0% { transform: translate3d(0, -100%, 0); }
    100% { transform: translate3d(0, 0, 0); }
  }
	
  body {
    padding: 0;
    margin: 0;
  }



`;

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default MyApp;
