import React, { ChangeEvent } from 'react';
import styles from './Dropdown.module.css'

interface DropdownProps {
  options: { value: string; label: string }[]; 
  onChange?: (value: string) => void; 
  defaultValue?: string; 
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, defaultValue }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <select className={styles.select} onChange={handleChange} defaultValue={defaultValue}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
