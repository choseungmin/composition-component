import React, { Children, isValidElement } from 'react';
import styled from 'styled-components';

const DialogCheckBox = ({children}) => {
  return (
    <Wrapper>
      <LabelBox>
        <Checkbox/>
        <Text>{children}</Text>
      </LabelBox>
      <ArrowBox>
        <Arrow/>
      </ArrowBox>
    </Wrapper>
  );
};

export default DialogCheckBox;

const DialogCheckBoxType = (<DialogCheckBox />).type;

export const getDialogCheckBoxes = (children) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      child => isValidElement(child) && child.type === DialogCheckBoxType,
    )
}

const Wrapper = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
`;

const LabelBox = styled.div`
  display: flex;
  align-items: center;
  
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1rem;
  height: 1rem;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #61dafb;
  border-radius: 5px;
  background-color: #0F0F0F;
  color: #61dafb;
  font-size: 1rem;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    background-color: #61dafb;
    color: #0F0F0F;
  }
`;

const Text = styled.div`
  font-size: 20px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
`;

const ArrowBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 1rem
`;

const Arrow = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotateY(0deg) rotate(45deg);
`;