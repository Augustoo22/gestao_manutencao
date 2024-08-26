import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

interface Option {
  value: string;
  label: string;
}

interface CustomTextFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  options?: Option[];
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'black', 
  },
  '& .MuiInputLabel-shrink': {
    color: 'red', 
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black', 
    },
    '&:hover fieldset': {
      borderColor: 'black', 
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black', 
    },
  },
}));

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  options,
  ...props
}) => {
  return (
    <StyledTextField
      id={id}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      select={options ? true : false}
      fullWidth
      margin="normal"
      variant="outlined"
      {...props}
    >
      {options && options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};

export default CustomTextField;
