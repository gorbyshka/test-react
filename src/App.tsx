import React, {
  useState
} from 'react';

import { Test } from './components/test';

import {
  ButtonTest,
  GlobalStyle
} from './appStyle';

export const App: React.FC = () => {
  
  const [isFullScreen, setFullScreen] = useState(false);

  const handleStartTest = () => {

    const element = document.documentElement as any;

    if (!isFullScreen) {

      if (element.requestFullscreen) element.requestFullscreen();
      else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
      else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
      else if (element.msRequestFullscreen) element.msRequestFullscreen();

      setFullScreen(true);

    }

  };

  return (

    <>

      <GlobalStyle />

      {!isFullScreen && <ButtonTest onClick={handleStartTest}>Запустить тест</ButtonTest>}

      {isFullScreen && <Test />}

    </>

  );
};
