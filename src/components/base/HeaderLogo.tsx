import styled from 'styled-components';

import { colors } from '../../lib/styles/colors';

const HeaderLogo = () => {
  // TODO: add state of today's date
  return <Container aria-label='구글 캘린더 로고'>7</Container>;
};

export default HeaderLogo;

const Container = styled.div.attrs((props) => ({
  'aria-label': props['aria-label'],
}))`
  text-align: center;
  width: 20px;
  color: ${colors.mainBlue};
  border-left: 5px solid ${colors.mainBlue};
  border-top: 5px solid ${colors.mainBlue};
  border-right: 5px solid ${colors.mainYellow};
  border-bottom: 5px solid ${colors.mainGreen};
  border-radius: 3px;
`;
