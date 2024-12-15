"use client";  

import * as React from 'react';
import Box from '@mui/material/Box';
import CustomTextField from '../components/customtextfield';  
import { Aside } from '../components/aside'; 
import Button from '@mui/material/Button';
import api from '../../config/axiosConfig'; 

export default function PartsRegistrationForm() {
  const [formData, setFormData] = React.useState({
    nome: '',
    codigo: '',
    categoria: '',
    quantidadeEstoque: '',
    fornecedor: '',
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

    // Enviar dados via POST para o backend usando axios
    api.post("/api/pecas", formData)
      .then(response => {
        console.log("Peça registrada:", response.data);
        handleClear();
      })
      .catch(error => {
        console.error("Erro ao registrar peça:", error);
      });
  };

  const handleClear = () => {
    setFormData({
      nome: '',
      codigo: '',
      categoria: '',
      quantidadeEstoque: '',
      fornecedor: '',
    });
  };

  const categories = [
    { value: 'filtros', label: 'Filtros' },
    { value: 'freios', label: 'Freios' },
    { value: 'baterias', label: 'Baterias' },
    { value: 'transmissao', label: 'Transmissão' },
    { value: 'suspensao', label: 'Suspensão' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Aside />

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: 1,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          '& > :not(style)': { mb: 2, width: '80%' },
        }}
        noValidate
        autoComplete="off"
      >
        <CustomTextField
          id="nome"
          label="Nome da Peça"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="codigo"
          label="Código da Peça"
          name="codigo"
          value={formData.codigo}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="categoria"
          label="Categoria"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          options={categories}
        />
        <CustomTextField
          id="quantidadeEstoque"
          label="Quantidade em Estoque"
          name="quantidadeEstoque"
          type="number"
          value={formData.quantidadeEstoque}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="fornecedor"
          label="Fornecedor"
          name="fornecedor"
          value={formData.fornecedor}
          onChange={handleChange}
          options={undefined}
        />

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'red',
              color: 'white',
              flex: 1,
              '&:hover': {
                backgroundColor: '#d32f2f',
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
                backgroundColor: '#424242',
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
