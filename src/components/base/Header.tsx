import styled from 'styled-components';

import { colors } from '../../lib/styles/styles';
import { media } from '../../lib/styles/media';
import AdjacentArrows from '../common/AdjacentArrows';
import TodayButton from '../common/TodayButton';
import DateFormatComboBox from './DateFormatComboBox';
import HeaderDate from './HeaderDate';
import HeaderLogo from './HeaderLogo';
import { CustomCalendarType } from '../../lib/types';

const Header = ({
  selectedMonth,
  selectedYear,
  getPrevMonth,
  getNextMonth,
  getCurrMonth,
}: CustomCalendarType) => {
  return (
    <Container>
      <Inner>
        <Left>
          <HeaderLogo />
        </Left>
        <Center>
          <TodayButton getCurrMonth={getCurrMonth!} />
          <AdjacentArrows
            getPrevMonth={getPrevMonth}
            getNextMonth={getNextMonth}
          />
          <HeaderDate
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
          />
        </Center>
        <Right>
          <DateFormatComboBox />
        </Right>
      </Inner>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 5px 2%;
  border-bottom: 1px solid ${colors.gray100};
  background: #fff;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
`;

const Left = styled.div``;

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 auto;
  text-align: center;
  max-width: 250px;

  & > * {
    margin: 0 auto;
  }

  @media (max-width: ${media.mobile}) {
    max-width: 200px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: end;
`;
