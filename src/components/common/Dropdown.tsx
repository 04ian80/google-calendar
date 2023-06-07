import React from 'react';
import styled from 'styled-components';

import { colors } from '../../lib/styles/colors';

type DropdownType = {
  options: React.ReactNode;
};

const Dropdown = ({ options }: DropdownType) => {
  return <Container>{options}</Container>;
};

export default Dropdown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0;
  min-width: 100px;
  padding: 8px 0;
  border: 1px solid ${colors.gray100};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14),
    //
    0 1px 18px 0 rgba(0, 0, 0, 0.12);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 30px;
    font-size: 0.8rem;
    color: ${colors.gray800};
    cursor: pointer;
  }

  & > div:hover {
    background-color: ${colors.gray50};
  }
`;
