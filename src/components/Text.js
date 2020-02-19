/** compontents/Text.js */

import React, {useContext} from 'react';
import styled from 'styled-components';
import DarkModeContext from '../context/DarkModeContext';
import {COLORS} from 'lib/globals';

const {DARK, LIGHT} = COLORS;
export const Text = styled.Text`
  font-size: 16px;
  color: ${props => (props.darkMode || props.light ? DARK.TEXT : LIGHT.TEXT)};
  font-style: italic;
  margin: 4px;
  font-family: Kusogi;
`;

export default props => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <Text darkMode={darkMode} light={props.light}>
      {props.children}
    </Text>
  );
};
