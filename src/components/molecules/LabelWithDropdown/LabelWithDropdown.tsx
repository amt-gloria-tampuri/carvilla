import React from 'react';
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Label from "../../atoms/Label/Label";

interface LabelWithDropdownProps {
  label: string; 
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string; 
}

const LabelWithDropdown: React.FC<LabelWithDropdownProps> = ({
  label,
  options,
  onChange,
  defaultValue
}) => {
  return (
    <div > 
        <Label text={label} />
        <Dropdown options={options} onChange={onChange} defaultValue={defaultValue} />
    </div>
  );
}

export default LabelWithDropdown;
