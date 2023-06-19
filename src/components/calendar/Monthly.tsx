import styled from 'styled-components';

import MonthlyDates from './MonthlyDates';
import MonthlyDays from './MonthlyDays';
import { media } from '../../lib/styles/media';
import { SelectedFullDatesType } from '../../lib/types';

const firstNumOfMonth = 1;
const countOfWeek = 7;

const Monthly = ({
  selectedDate,
  selectedMonth,
  selectedYear,
}: SelectedFullDatesType) => {
  const prevMonthLastDate = new Date(selectedYear, selectedMonth - 1, 0);
  const thisMonthFirstDate = new Date(selectedYear, selectedMonth - 1, 1);
  const nextMonthFirstDate = new Date(selectedYear, selectedMonth, 1);

  const prevMonthLastDates = Array(thisMonthFirstDate.getDay())
    .fill(prevMonthLastDate.getDate() - thisMonthFirstDate.getDay() + 1)
    .map((v, i) => v + i)
    .map((v) => v);

  const currMonthDates = Array(selectedDate)
    .fill(firstNumOfMonth)
    .map((v, i) => v + i)
    .map((v) => v);

  const nextMonthFirstDates = Array(countOfWeek - nextMonthFirstDate.getDay())
    .fill(nextMonthFirstDate.getDate())
    .map((v, i) => v + i)
    .map((v) => v);

  return (
    <Container>
      <MonthlyDays />
      <MonthlyDates
        selectedMonth={selectedMonth}
        currMonthDates={currMonthDates}
        prevMonthLastDates={prevMonthLastDates}
        nextMonthFirstDates={nextMonthFirstDates}
      />
    </Container>
  );
};

export default Monthly;

const Container = styled.table`
  flex: 1;
  height: 100%;
  border-collapse: collapse;

  & > * {
    font-size: 12px;
    @media (max-width: ${media.mobile}) {
      font-size: 9px;
    }
  }
`;
