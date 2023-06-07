import React from 'react';
import styled from 'styled-components';

type MainTemplateType = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateType) => {
  return <Container>{children}</Container>;
};

export default MainTemplate;

const Container = styled.div``;
