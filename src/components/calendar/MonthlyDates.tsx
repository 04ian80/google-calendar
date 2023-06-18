import styled from 'styled-components';

import { colors, styles } from '../../lib/styles/styles';

const today = new Date().getDate();

type DatesArrayType = number[];

type MonthlyDatesType = {
  selectedMonth: number;
  currMonthDates: DatesArrayType;
  prevMonthLastDates: DatesArrayType;
  nextMonthFirstDates: DatesArrayType;
};

const MonthlyDates = ({
  selectedMonth,
  currMonthDates,
  prevMonthLastDates,
  nextMonthFirstDates,
}: MonthlyDatesType) => {
  return (
    <DateGrid>
      {prevMonthLastDates.map((v, i) => (
        <PrevDates key={i}>
          <td>{v}</td>
        </PrevDates>
      ))}

      {currMonthDates.map((v, i) => (
        <CurrDates key={i}>
          {v === 1 ? (
            <td>
              {selectedMonth}월 {v}일
            </td>
          ) : v === today ? (
            <Today>
              <span>{v}</span>
            </Today>
          ) : (
            <td>{v}</td>
          )}
        </CurrDates>
      ))}

      {nextMonthFirstDates.map((v, i) => (
        <NextDates key={i}>
          {v === 1 ? (
            <td>
              {selectedMonth}월 {v}일
            </td>
          ) : (
            <td>{v}</td>
          )}
        </NextDates>
      ))}
    </DateGrid>
  );
};

export default MonthlyDates;

const DateGrid = styled.tbody`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: calc(100% - ${styles.thHeight});
  font-size: 12px;

  & > * {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${colors.gray100};
    border-left: 1px solid ${colors.gray100};

    & > * {
      padding-top: 7px;
    }
  }
`;

const PrevDates = styled.tr`
  color: ${colors.gray200};
`;

const CurrDates = styled.tr`
  color: ${colors.gray800};
  font-weight: 600;
`;

const Today = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-top: 4px;
  border-radius: 100%;
  color: white;
  background-color: ${colors.mainBlue};
`;

const NextDates = styled.tr`
  color: ${colors.gray200};
`;
