import { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: #2463EB;
    }

    &:focus + span {
      box-shadow: 0 0 1px #2463EB;
    }

    &:checked + span::before {
      transform: translateX(26px);
    }
  }
`;

const ButtonSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

interface Props {
  onClick?: React.MouseEventHandler,
  disabled?: boolean;
  checked?: boolean;
}

const ToggleButton = ( {onClick, disabled, checked}: Props ) => {

    const [ disableButton, setDisableButton ] = useState(false);

    useEffect(() => {
      if(disabled) {
        setDisableButton(true);
      } else {
        setDisableButton(false)
      }
    },[disabled])

    return (
        <ButtonContainer>
            {(disableButton) ? 
              <input type="checkbox" onClick={onClick} checked={checked} disabled/> 
              : 
              <input type="checkbox" onClick={onClick} checked={checked} onChange={() => {}}/>
            }
            <ButtonSpan className="slider round"></ButtonSpan>
        </ButtonContainer>
    )
}

export default ToggleButton;