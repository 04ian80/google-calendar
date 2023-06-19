import styled from 'styled-components';

import { colors } from '../../lib/styles/styles';
import { media } from '../../lib/styles/media';
import { SelectedMYType } from '../../lib/types';

const HeaderDate = ({ selectedYear, selectedMonth }: SelectedMYType) => {
  return (
    <Container>
      {selectedYear}년 {selectedMonth}월
    </Container>
  );
};

export default HeaderDate;

const Container = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-shrink: 0;
  border: none;
  color: ${colors.gray800};
  background-color: transparent;
  font-size: 18px;
  line-height: 28px;
  width: 100px;

  @media (max-width: ${media.mobile}) {
    font-size: 14px;
    width: 78px;
  }
`;
