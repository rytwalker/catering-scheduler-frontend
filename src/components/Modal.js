import React from 'react';
import styled from 'styled-components';
import { Portal } from 'utilities';

const Modal = ({ children }) => {
  return (
    <Portal>
      <ModalWrapper>
        <ModalCard>
          <CloseButton>X</CloseButton>
          <div>{children}</div>
        </ModalCard>
        <Background />
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalCard = styled.div`
  background: #fafafa;
  max-width: 900px;
  width: 100%;
  min-height: 100%;
  border-radius: 2.5px;
  z-index: 1000;
  @media (min-width: 900px) {
    margin-top: -25px;
    min-height: 0;
    /* // height: 600px; */
    position: fixed;
    box-shadow: 0 5px 28px -5px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  padding: calc(45px - 2rem);
  font-size: 2rem;
  font-weight: bold;
  color: #fafafa;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #b5e8d5;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(250, 250, 250, 0.6);
`;
