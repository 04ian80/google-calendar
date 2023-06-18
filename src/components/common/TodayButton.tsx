import styled from 'styled-components';

import ButtonField from './ButtonField';

const TODAY_TEXT = '오늘';

const TodayButton = ({ getCurrMonth }: { getCurrMonth: () => void }) => (
  <Container variants='primary' onClick={getCurrMonth}>
    {TODAY_TEXT}
  </Container>
);

export default TodayButton;

const Container = styled(ButtonField)``;
