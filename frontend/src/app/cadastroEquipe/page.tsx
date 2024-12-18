"use client";  
import * as React from 'react';
import Box from '@mui/material/Box';
import CustomTextField from '../components/customtextfield';  
import { Aside } from '../components/aside'; 
import Button from '@mui/material/Button';
import api from '../../config/axiosConfigEquipe'; // Importa a configuração do Axios

export default function TeamRegistrationForm() {
  const [formData, setFormData] = React.useState({
    nomeEquipe: '',
    liderEquipe: '',
    numeroMembros: '',
    dataFormacao: '',
    areaAtuacao: '',
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
    console.log('Form data submitted:', formData);

    api.post('/api/equipes', formData)
      .then((response) => {
        console.log('Equipe criada:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao criar equipe', error);
      });
  };

  const handleClear = () => {
    setFormData({
      nomeEquipe: '',
      liderEquipe: '',
      numeroMembros: '',
      dataFormacao: '',
      areaAtuacao: '',
    });
  };

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
          id="nomeEquipe"
          label="Nome da Equipe"
          name="nomeEquipe"
          value={formData.nomeEquipe}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="liderEquipe"
          label="Líder da Equipe"
          name="liderEquipe"
          value={formData.liderEquipe}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="numeroMembros"
          label="Número de Membros"
          name="numeroMembros"
          value={formData.numeroMembros}
          onChange={handleChange}
          type="number"
          options={undefined}
        />
        <CustomTextField
          id="dataFormacao"
          label="Data de Formação"
          name="dataFormacao"
          type="date"
          value={formData.dataFormacao}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          options={undefined}
        />
        <CustomTextField
          id="areaAtuacao"
          label="Área de Atuação"
          name="areaAtuacao"
          value={formData.areaAtuacao}
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
