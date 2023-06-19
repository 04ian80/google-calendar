import styled from 'styled-components';

import { colors } from '../../lib/styles/styles';
import { media } from '../../lib/styles/media';

const HeaderLogo = () => {
  const todayDate = new Date().getDate();
  return (
    <Container>
      <Logo aria-label='구글 캘린더 로고'>{todayDate}</Logo>
      <Title>캘린더</Title>
    </Container>
  );
};

export default HeaderLogo;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div.attrs((props) => ({
  'aria-label': props['aria-label'],
}))`
  text-align: center;
  width: 20px;
  margin-right: 10px;
  color: ${colors.mainBlue};
  border-left: 5px solid ${colors.mainBlue};
  border-top: 5px solid ${colors.mainBlue};
  border-right: 5px solid ${colors.mainYellow};
  border-bottom: 5px solid ${colors.mainGreen};
  border-radius: 3px;
`;

const Title = styled.span`
  flex-shrink: 0;
  font-size: 20px;
  color: ${colors.gray800};

  @media (max-width: ${media.mobile}) {
    font-size: 14px;
  }
`;
