import styled from 'styled-components';

import { colors } from '../../lib/styles/colors';

const HeaderDate = () => {
  // TODO: add state of Today's date (input field & date picker)
  return <Container>2023년 6월</Container>;
};

export default HeaderDate;

const Container = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border: none;
  color: ${colors.gray800};
  background-color: transparent;
  font-size: calc(0.8rem + 0.8vw);
  line-height: 28px;
`;
