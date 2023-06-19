import Header from '../components/base/Header';
import Monthly from '../components/calendar/Monthly';
import MainTemplate from '../components/main/MainTemplate';
import useCalendar from '../hooks/useCalendar';

const Main = () => {
  const {
    selectedDate,
    selectedMonth,
    selectedYear,
    getPrevMonth,
    getNextMonth,
    getCurrMonth,
  } = useCalendar();

  return (
    <MainTemplate>
      <Header
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        getPrevMonth={getPrevMonth}
        getNextMonth={getNextMonth}
        getCurrMonth={getCurrMonth}
      />
      <Monthly
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />
    </MainTemplate>
  );
};

export default Main;
