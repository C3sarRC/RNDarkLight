/** components/Pillow.js */

import React, {useContext} from 'react';
import styled from 'styled-components';
import DarkModeContext from 'context/DarkModeContext';
import {COLORS} from 'lib/globals';

const {DARK, LIGHT} = COLORS;
const Pillow = styled.View`
  width: 30px;
  height: 10px;
  background-color: ${props => (props.darkMode ? DARK.PRIMARY : LIGHT.PRIMARY)};
  margin: 8px;
`;

export default () => {
  const {darkMode} = useContext(DarkModeContext);
  return <Pillow darkMode={darkMode} />;
};
