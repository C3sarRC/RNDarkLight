/** App.js **/

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {
  Layout,
  ContextProvider,
  Title,
  Subtitle,
  Pillow,
  Switch,
} from 'components';
import * as Font from 'expo-font';

const AUTHOR_NAME = 'C3sar\nR0driguez';
const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFont() {
    await Font.loadAsync({
      Kusogi: require('assets/fonts/Kosugi-Regular.ttf'),
    });
    setFontLoaded(true);
  }

  useEffect(() => {
    loadFont();
  }, []);

  return fontLoaded ? (
    <ContextProvider>
      <Layout>
        <TitleContainer>
          <Title>{AUTHOR_NAME}</Title>
          <Pillow />
        </TitleContainer>
        <Subtitle>FullStack Software Engineer</Subtitle>
        <Switch />
      </Layout>
    </ContextProvider>
  ) : null;
};
