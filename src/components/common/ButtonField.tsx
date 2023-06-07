import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../../lib/styles/colors';
import { MouseEventType } from '../../lib/types';

type ButtonFieldType = {
  children: React.ReactNode;
  onClick?: MouseEventType<HTMLButtonElement>;
  variants: 'primary' | 'secondary';
};

const ButtonField = ({
  children,
  variants = 'primary',
  onClick,
}: ButtonFieldType) => {
  return (
    <ButtonFieldContainer onClick={onClick} variants={variants}>
      {children}
    </ButtonFieldContainer>
  );
};

export default ButtonField;

const variantStyles = {
  primary: css`
    background: white;
  `,
  secondary: css`
    background: ${colors.graySecondary};
  `,
};

const ButtonFieldContainer = styled.button<ButtonFieldType>`
  ${(props) => variantStyles[props.variants]}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 8px 2vw;
  border: 1px solid ${colors.gray100};
  border-radius: 4px;
  color: ${colors.gray800};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${colors.gray50};
  }

  &:active {
    background-color: ${colors.gray100};
  }
`;
