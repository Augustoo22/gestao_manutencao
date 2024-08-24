"use client";  // Garante que o componente seja tratado como um componente do lado do cliente, permitindo o uso de hooks do React.

import * as React from 'react';
import Box from '@mui/material/Box';
import CustomTextField from '../components/customtextfield';
import { Aside } from '../components/aside';
import Button from '@mui/material/Button';

export default function RegistrationForm() {
  const [formData, setFormData] = React.useState({
    nomeCompleto: '',
    username: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
    telefone: '',
    cargo: '',
    nivelAcesso: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Adicione aqui a lógica para enviar os dados do formulário.
    console.log('Form data submitted:', formData);
  };

  const handleClear = () => {
    setFormData({
      nomeCompleto: '',
      username: '',
      email: '',
      senha: '',
      confirmacaoSenha: '',
      telefone: '',
      cargo: '',
      nivelAcesso: '',
    });
  };

  const accessLevels = [
    { value: 'supervisor', label: 'Supervisor' },
    { value: 'funcionario', label: 'Funcionário' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Painel lateral (aside) */}
      <Aside />

      {/* Formulário */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: 1,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          '& > :not(style)': { mb: 2, width: '80%' },  // Use `mb` para espaçamento inferior
        }}
        noValidate
        autoComplete="off"
      >
        <CustomTextField
          id="nomeCompleto"
          label="Nome Completo"
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="username"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="email"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="senha"
          label="Senha"
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="confirmacaoSenha"
          label="Confirmação de Senha"
          type="password"
          name="confirmacaoSenha"
          value={formData.confirmacaoSenha}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="telefone"
          label="Telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="cargo"
          label="Cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="nivelAcesso"
          label="Nível de Acesso"
          name="nivelAcesso"
          options={accessLevels}
          value={formData.nivelAcesso}
          onChange={handleChange}
        />

        {/* Botões */}
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'red',
              color: 'white',
              flex: 1,
              '&:hover': {
                backgroundColor: '#d32f2f', // Cor mais escura para hover
              },
            }}
            type="submit"
          >
            Enviar
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              flex: 1,
              '&:hover': {
                backgroundColor: '#424242', // Cor mais clara para hover
              },
            }}
            onClick={handleClear}
          >
            Limpar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
