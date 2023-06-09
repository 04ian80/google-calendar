import { useState } from 'react';

type OpenDropdownType = () => void;

const useDateFormat = (): [OpenDropdownType, boolean] => {
  const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);

  const openDropdown: OpenDropdownType = () => {
    setIsOpenedDropdown((prev) => !prev);
  };

  return [openDropdown, isOpenedDropdown];
};

export default useDateFormat;
