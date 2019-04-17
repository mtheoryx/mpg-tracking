import React, { useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import logo from './logo.svg';
import DemoApp from '../DemoApp/DemoApp';
import MpgApp from '../MpgApp/MpgApp';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 40vmin;
  &:hover {
    animation: ${rotate360} infinite 3s linear;
  }
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.a`
  color: #61dafb;
  cursor: pointer;
  font-size: 2em;
`;

const AppIntro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`;

const App = () => {
  const [viewDemo, setViewDemo] = useState(false);
  const [viewMpg, setViewMpg] = useState(true);
  const [viewNothing, setViewNothing] = useState(false);

  const handleUseDemo = e => {
    e.preventDefault();
    setViewMpg(false);
    setViewDemo(true);
    setViewNothing(false);
  };
  const handleUseMpg = e => {
    e.preventDefault();
    setViewMpg(true);
    setViewDemo(false);
    setViewNothing(false);
  };
  const handleReset = e => {
    e.preventDefault();
    setViewMpg(false);
    setViewDemo(false);
    setViewNothing(true);
  };
  return (
    <React.Fragment>
      {viewDemo && <DemoApp />}
      {viewMpg && <MpgApp />}
      <AppWrapper>
        <AppHeader>
          {viewNothing && (
            <React.Fragment>
              <AppLogo src={logo} alt="logo" />
              <AppIntro>App switcher Loading screen</AppIntro>
              <AppIntro>
                Components styled with <code>styled-components</code>{' '}
                <span aria-label="nail polish" role="img">
                  💅
                </span>
              </AppIntro>
            </React.Fragment>
          )}
        </AppHeader>
        <AppLink onClick={handleUseDemo}>Use Demo</AppLink> <br />
        <AppLink onClick={handleUseMpg}>Use Mpg</AppLink> <br />
        <AppLink onClick={handleReset}>Reset</AppLink> <br />
      </AppWrapper>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
