"use client";  

import * as React from 'react';
import Box from '@mui/material/Box';
import CustomTextField from '../components/customtextfield';
import { Aside } from '../components/aside';
import Button from '@mui/material/Button';

export default function CarRegistrationForm() {
  const [formData, setFormData] = React.useState({
    marca: '',
    modelo: '',
    anoFabricacao: '',
    numeroPlaca: '',
    cor: '',
    status: '',
    ultimaManutencao: '',
    proximaManutencaoProgramada: '',
    observacoes: '',
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
  };

  const handleClear = () => {
    setFormData({
      marca: '',
      modelo: '',
      anoFabricacao: '',
      numeroPlaca: '',
      cor: '',
      status: '',
      ultimaManutencao: '',
      proximaManutencaoProgramada: '',
      observacoes: '',
    });
  };

  const marcas = [
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'mazda', label: 'Mazda' },
    { value: 'subaru', label: 'Subaru' },
  ];

  const statusOptions = [
    { value: 'em_manutencao', label: 'Em Manutenção' },
    { value: 'fila_de_manutencao', label: 'Fila de Manutenção' },
    { value: 'concluido', label: 'Concluido' },

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
          id="marca"
          label="Marca"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          options={marcas}
        />
        <CustomTextField
          id="modelo"
          label="Modelo"
          name="modelo"
          value={formData.modelo}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="anoFabricacao"
          label="Ano de Fabricação"
          name="anoFabricacao"
          value={formData.anoFabricacao}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="numeroPlaca"
          label="Número de Placa"
          name="numeroPlaca"
          value={formData.numeroPlaca}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="cor"
          label="Cor"
          name="cor"
          value={formData.cor}
          onChange={handleChange}
          options={undefined}
        />
        <CustomTextField
          id="status"
          label="Status"
          name="status"
          options={statusOptions}
          value={formData.status}
          onChange={handleChange}
        />
        <CustomTextField
          id="ultimaManutencao"
          label="Última Manutenção"
          type="date"
          name="ultimaManutencao"
          value={formData.ultimaManutencao}
          onChange={handleChange}
          options={undefined}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <CustomTextField
          id="proximaManutencaoProgramada"
          label="Próxima Manutenção Programada"
          type="date"
          name="proximaManutencaoProgramada"
          value={formData.proximaManutencaoProgramada}
          onChange={handleChange}
          options={undefined}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <CustomTextField
          id="observacoes"
          label="Observações"
          name="observacoes"
          value={formData.observacoes}
          onChange={handleChange}
          options={undefined}
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
