"use client";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

interface Car {
  id: number;
  marca: string;
  modelo: string;
  anoFabricacao: string;
  numeroPlaca: string;
  numeroChassi: string;
  cor: string;
  dataAquisicao: string;
  localizacao: string;
  status: string;
  numeroSeguro: string;
  dataVencimentoSeguro: string;
  ultimaManutencao: string;
  proximaManutencaoProgramada: string;
  observacoes: string;
  manualProprietario: string;
}

const initialRows: Car[] = [
  { 
    id: 1, marca: 'Toyota', modelo: 'Corolla', anoFabricacao: '2020', numeroPlaca: 'ABC-1234', cor: 'Preto', 
    status: 'Em Manutenção', ultimaManutencao: '2023-12-01', proximaManutencaoProgramada: '2024-06-01', 
    observacoes: 'Nenhuma' 
  },
  { 
    id: 2, marca: 'Honda', modelo: 'Civic', anoFabricacao: '2019', numeroPlaca: 'XYZ-5678', cor: 'Branco', 
    status: 'Concluído', ultimaManutencao: '2023-11-15', proximaManutencaoProgramada: '2024-05-15', 
    observacoes: 'Manutenção regular' 
  },
  // Adicione mais carros conforme necessário
];

export default function CarsTable() {
  const [rows, setRows] = React.useState<Car[]>(initialRows);

  const handleEdit = (id: number) => {
    // Lógica para editar carro
    console.log(`Editar carro com ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    // Lógica para excluir carro
    setRows(rows.filter(row => row.id !== id));
    console.log(`Excluir carro com ID: ${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="cars table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell>Modelo</TableCell>
            <TableCell>Ano de Fabricação</TableCell>
            <TableCell>Número de Placa</TableCell>
            <TableCell>Cor</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Última Manutenção</TableCell>
            <TableCell>Próxima Manutenção Programada</TableCell>
            <TableCell>Observações</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.id}</TableCell>
              <TableCell>{car.marca}</TableCell>
              <TableCell>{car.modelo}</TableCell>
              <TableCell>{car.anoFabricacao}</TableCell>
              <TableCell>{car.numeroPlaca}</TableCell>
              <TableCell>{car.cor}</TableCell>
              <TableCell>{car.status}</TableCell>
              <TableCell>{car.ultimaManutencao}</TableCell>
              <TableCell>{car.proximaManutencaoProgramada}</TableCell>
              <TableCell>{car.observacoes}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => handleEdit(car.id)}
                  style={{ marginRight: '10px' }}
                  href='/cadastroMaquina'
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(car.id)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
