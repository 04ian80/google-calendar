import { useCallback, useState } from 'react';

const today = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

const useCalendar = () => {
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [selectedDate, setSelectedDate] = useState(
    new Date(selectedYear, selectedMonth, 0).getDate()
  );

  const getPrevMonth = useCallback(() => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
    setSelectedDate(new Date(selectedYear, selectedMonth - 1, 0).getDate());
  }, [selectedMonth, selectedYear]);

  const getNextMonth = useCallback(() => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
    setSelectedDate(new Date(selectedYear, selectedMonth + 1, 0).getDate());
  }, [selectedMonth, selectedYear]);

  const getCurrMonth = useCallback(() => {
    setSelectedYear(today.year);
    setSelectedMonth(today.month);
    setSelectedDate(new Date(today.year, today.month, 0).getDate());
  }, []);

  return {
    selectedDate,
    selectedMonth,
    selectedYear,
    getPrevMonth,
    getNextMonth,
    getCurrMonth,
  };
};

export default useCalendar;
