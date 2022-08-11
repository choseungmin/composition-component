import React, { Children, isValidElement } from 'react';
import styled from "styled-components";

const DialogLabelButton = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
};

export default DialogLabelButton;

const DialogLabelButtonType = (<DialogLabelButton />).type;

export const getDialogLabelButtons = (children) =>   {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      child => isValidElement(child) && child.type === DialogLabelButtonType,
    )
    .slice(0, 2);
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 1px solid #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  
  &:hover {
    background-color: #61dafb;
    color: #0F0F0F;
    cursor: pointer;
  }
  
`;