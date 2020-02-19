/** components/Switch.js */
import React, {useContext} from 'react';
import styled from 'styled-components';
import Text from './Text';
import DarkModeContext from 'context/DarkModeContext';
import {COLORS} from 'lib/globals';

const {DARK, LIGHT} = COLORS;
const Switch = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 8px;
  flex-direction: row;
  font-size: 12px;
  background-color: ${props => (props.darkMode ? DARK.PRIMARY : LIGHT.PRIMARY)};
  margin: 16px;
`;

export default () => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <Switch onPress={toggleDarkMode} darkMode={darkMode}>
      <Text light>Switch to {darkMode ? 'Light' : 'Dark'} Mode</Text>
    </Switch>
  );
};