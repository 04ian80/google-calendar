import { EventHandler, MouseEvent } from 'react';

export type MouseEventType<T = Element> = EventHandler<MouseEvent<T>>;

type SelectedDType = {
  selectedDate: number;
};

export type SelectedMYType = {
  selectedMonth: number;
  selectedYear: number;
};

export type SelectedFullDatesType = SelectedMYType & SelectedDType;

export type GetMonthType = {
  getCurrMonth?: () => void;
  getPrevMonth: () => void;
  getNextMonth: () => void;
};

export type CustomCalendarType = SelectedFullDatesType & GetMonthType;
