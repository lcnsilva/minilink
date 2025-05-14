// import ToggleButton from "../ToggleButton";
import Label from "../UI/Label";
import Title from "../UI/Title";
import ToggleButton from "../UI/ToggleButton";
import { OptionsButtonContainer, TextContainer } from "./ToggleOption";

interface Props {
    title?: string,
    informationText?: string
    onClick?: React.MouseEventHandler
    disabled?: boolean
    checked?: boolean
}

const ToggleOption = ({title, informationText, onClick, disabled, checked}: Props) => {
  return (
    <OptionsButtonContainer>
      <ToggleButton onClick={onClick} disabled={disabled} checked={checked}/>
      <TextContainer>
        <Title title={title!}/>
        <Label text={informationText!}/>
      </TextContainer>
    </OptionsButtonContainer>
  );
};

export default ToggleOption;