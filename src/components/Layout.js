import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-rows: 5rem 1fr;
  grid-template-areas:
    'header'
    'content';
  overflow: hidden;
`;
const Header = styled.div`
  grid-area: header;
  background: #6a737b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.75em;
  border-bottom: 1px solid;
`;
const HeaderSubText = styled.p`
  margin: 0;
  font-size: .5em;
  font-style: italic;
`;
const Content = styled.div`
  grid-area: content;
  background: whitesmoke;
  position: relative;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
`;

const Layout = ({orgName, children}) => 
  <LayoutWrapper>
    <Header>
      {orgName}
      <HeaderSubText>(Top 100 repos based on when they were recently updated)</HeaderSubText>
    </Header>
    <Content>{children}</Content>
  </LayoutWrapper>

export default Layout;