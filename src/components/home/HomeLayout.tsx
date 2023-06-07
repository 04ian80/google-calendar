import React from 'react';
import styled from 'styled-components';

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <Container>{children}</Container>;
};

export default HomeLayout;

const Container = styled.div``;
