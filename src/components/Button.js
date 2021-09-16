import styled from 'styled-components';

const Button = styled.button`
  background-color: teal;
  color: whitesmoke;
  &:disabled{
    background: lightgray;
  }
`;

const ButtonGroup =  styled.div`
  display: flex;
  width: 100%;
  padding: .25em;

  ${Button}{
    margin-right: .25em;
    &:last-of-type{
      margin: 0;
    }
  }
`;

export {Button, ButtonGroup};