import React, { Children, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import DialogLabelButton, { getDialogLabelButtons } from './DialogLabelButton';
import DialogTitle, { getDialogTitles } from './DialogTitle';
import { getDialogCheckBoxes } from './DialogCheckBox';


const DialogTitleType = (<DialogTitle/>).type;
const DialogLabelButtonType = (<DialogLabelButton/>).type;

export const getOtherChildren = (children) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      child => isValidElement(child) && ![DialogTitleType, DialogLabelButtonType].includes(child.type),
    );
};

const DialogMain = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  const dialogTitles = getDialogTitles(children);
  const dialogLabelButtons = getDialogLabelButtons(children);
  const dialogCheckBoxes = getDialogCheckBoxes(children);
  const otherChildren = getOtherChildren(children);

  return createPortal(
    <Wrapper>

      <div>
        {dialogTitles && <div>{dialogTitles}</div>}
        {/*{dialogCheckBoxes && <div>{dialogCheckBoxes}</div>}*/}
        {otherChildren}
        {dialogLabelButtons && (
          <div>
            {dialogLabelButtons}
          </div>
        )}
      </div>
    </Wrapper>,
    document.body);
};

export default DialogMain;

const Wrapper = styled.div`
  //width: 100%;
  //height: 100%;
  color: #fff;
  //margin: 0 auto;

  //left:0;
  //right:0;
  //top:0;
  //background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  //flex-direction: column;
  //align-items: center;
  justify-content: center;

  & > div {
    width: 300px;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    background-color: #0F0F0F;
    border-radius: 20px 20px 0 0;
    padding-top: 20px;
  }

`;
