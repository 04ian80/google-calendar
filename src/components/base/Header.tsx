import styled from 'styled-components';

import { colors } from '../../lib/styles/colors';
import AdjacentArrows from '../common/AdjacentArrows';
import TodayButton from '../common/TodayButton';
import DateFormatComboBox from './DateFormatComboBox';
import HeaderDate from './HeaderDate';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  return (
    <Container>
      <Inner>
        <Left>
          <HeaderLogo />
        </Left>
        <Center>
          <TodayButton />
          <AdjacentArrows />
          <HeaderDate />
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
  padding: 5px 3%;
  border-bottom: 1px solid ${colors.gray100};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;

  & > * {
    width: 33%;
  }
`;

const Left = styled.div``;

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 auto;
  text-align: center;
  max-width: 400px;

  & > * {
    margin: 0 auto;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: end;
`;
