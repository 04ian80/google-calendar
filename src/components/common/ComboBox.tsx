import React from 'react';
import styled from 'styled-components';

import { MouseEventType } from '../../lib/types';
import ButtonField from './ButtonField';
import Dropdown from './Dropdown';

type ComboBoxType = {
  fieldText: React.ReactNode;
  options: React.ReactNode;
  onClick: MouseEventType<HTMLButtonElement>;
  isVisible: boolean;
};

const ComboBox = ({ fieldText, options, onClick, isVisible }: ComboBoxType) => {
  return (
    <Container>
      {/* TODO: split this ComboBoxInput into another component */}
      {/* TODO: add state of date format */}
      <ComboBoxInput
        variants='primary'
        children={fieldText}
        onClick={onClick}
      />
      {isVisible && <ComboBoxOptions options={options} />}
    </Container>
  );
};

export default ComboBox;

const Container = styled.div`
  position: relative;
  /* width: 100%; */
`;

const ComboBoxInput = styled(ButtonField)``;

const ComboBoxOptions = styled(Dropdown)``;
