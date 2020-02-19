/** components/Layout.js */

import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components';
import DarkModeContext from 'context/DarkModeContext';
import {Animated} from 'react-native';
import {COLORS} from 'lib/globals';

const {DARK, LIGHT} = COLORS,
  ANIMATION_DURATION = 1000;

const Layout = styled(Animated.View)`
    flex: 1;
    flex-direction: column;
    padding: 16px;
    justify-content: center;
    align-items: center
    background-color: ${props =>
      props.darkMode ? DARK.BG_COLOR : LIGHT.BG_COLOR};
`;

export default props => {
  const {darkMode} = useContext(DarkModeContext);
  const animatedValue = useRef(null);
  if (!animatedValue.current) {
    animatedValue.current = new Animated.Value(0);
  }
  const opacity = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  useEffect(() => {
    animatedValue.current.setValue(0);
    Animated.timing(animatedValue.current, {
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start();
  }, [darkMode]);
  return (
    <Layout darkMode={darkMode} style={{opacity}}>
      {props.children}
    </Layout>
  );
};
