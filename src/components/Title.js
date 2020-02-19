/** components/Title.js */

import React, {useContext} from 'react';
import styled from 'styled-components';
import {Text} from './Text';
import DarkModeContext from '../context/DarkModeContext';

const Title = styled(Text)`
  font-size: 75px;
  margin-bottom: 24px;
  font-weight: bold;
  font-style: italic;
`;

export default props => {
  const {darkMode} = useContext(DarkModeContext);
  return <Title darkMode={darkMode}>{props.children}</Title>;
};
