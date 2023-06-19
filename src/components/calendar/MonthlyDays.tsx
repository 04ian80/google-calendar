import styled from 'styled-components';

import { colors, styles } from '../../lib/styles/styles';

const week = ['일', '월', '화', '수', '목', '금', '토'];

const MonthlyDays = () => {
  return (
    <DayGrid>
      {week.map((day, i) => (
        <tr>
          <th key={i}>{day}</th>
        </tr>
      ))}
    </DayGrid>
  );
};

export default MonthlyDays;

const DayGrid = styled.thead`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  tr {
    display: flex;
    justify-content: center;
    align-items: end;
    border-left: 1px solid ${colors.gray100};
    height: ${styles.thHeight};
  }

  tr th {
    color: ${colors.gray800};
  }
`;
