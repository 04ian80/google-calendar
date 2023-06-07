import { RxTriangleDown } from 'react-icons/rx';
import styled from 'styled-components';
import useDateFormat from '../../hooks/useDateFormat';
import ComboBox from '../common/ComboBox';

const DATE_FORMAT_OPTIONS = [
  { name: '일', shortCut: 'D', id: 1 },
  { name: '주', shortCut: 'W', id: 2 },
  { name: '월', shortCut: 'M', id: 3 },
];

const DateFormatComboBox = () => {
  const [openDropdown, isOpenedDropdown] = useDateFormat();

  return (
    <ComboBox
      fieldText={
        <>
          <span>월</span>
          <DropdownIcon />
        </>
      }
      onClick={openDropdown}
      isVisible={isOpenedDropdown}
      options={
        <>
          {Object.values(DATE_FORMAT_OPTIONS).map((v) => (
            <div key={v.id}>
              <span>{v.name}</span>
              <span>{v.shortCut}</span>
            </div>
          ))}
        </>
      }
    />
  );
};

export default DateFormatComboBox;

const DropdownIcon = styled(RxTriangleDown)`
  margin-left: 5px;
`;
