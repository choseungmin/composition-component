import React, { Children, isValidElement } from 'react';
import styled from "styled-components";

const DialogTitle = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
};

export default DialogTitle;

const DialogTitleType = (<DialogTitle/>).type;

export const getDialogTitles = (children) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      child => isValidElement(child) && child.type === DialogTitleType,
    )
    .slice(0, 2);
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  
`;