import styled from 'styled-components';

import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { colors } from '../../lib/styles/colors';

const AdjacentArrows = () => {
  return (
    <Container>
      <Button aria-label='이전 달로 이동하는 버튼'>
        <RxCaretLeft size={25} />
      </Button>
      <Button aria-label='다음 달로 이동하는 버튼'>
        <RxCaretRight size={25} />
      </Button>
    </Container>
  );
};

export default AdjacentArrows;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button.attrs((props) => ({
  'aria-label': props['aria-label'],
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${colors.gray50};
  }

  & > * {
    margin: 0 5px;
    font-size: 24px;
    color: ${colors.gray200};
  }
`;
