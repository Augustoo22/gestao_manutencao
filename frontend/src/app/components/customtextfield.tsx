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
  options?: Option[]; // Para o SELECT
  // Outros props se necessário
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'black', // Cor da label quando o campo não está em foco
  },
  '& .MuiInputLabel-shrink': {
    color: 'red', // Cor da label quando o campo está em foco
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black', // Cor da borda padrão
    },
    '&:hover fieldset': {
      borderColor: 'black', // Cor da borda ao passar o mouse
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black', // Cor da borda ao focar
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