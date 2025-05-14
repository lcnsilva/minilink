import styled from "styled-components";

const SelectStyled = styled.select`
  appearance: none;
  background-color: #f9fafb;
  color: #111827;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  background-image: url("data:image/svg+xml;utf8,<svg fill='none' stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M19 9l-7 7-7-7'></path></svg>");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }`;

const Option = styled.option`
`

interface Props {
    options: {label: string; value: number}[];
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}
const Select = ({options, onChange}: Props) => {
    return (
        <SelectStyled onChange={onChange}>
            {options.map((option, index) => 
            <Option key={index} value={option.value}>
              {option.label}
            </Option>)}
        </SelectStyled>
    )
}

export default Select