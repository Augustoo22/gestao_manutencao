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

interface Maintenance {
  idManutencao: number;
  carro: string;
  descricaoProblema: string;
  dataHoraInicio: string;
  dataHoraFim: string;
  equipeResponsavel: string;
}

const initialRows: Maintenance[] = [
  { 
    idManutencao: 1, 
    carro: 'Toyota Corolla', 
    descricaoProblema: 'Troca de óleo e revisão geral', 
    dataHoraInicio: '2023-12-01T09:00', 
    dataHoraFim: '2023-12-01T12:00', 
    equipeResponsavel: 'Equipe 1' 
  },
  { 
    idManutencao: 2, 
    carro: 'Honda Civic', 
    descricaoProblema: 'Substituição de pastilhas de freio', 
    dataHoraInicio: '2023-11-15T10:30', 
    dataHoraFim: '2023-11-15T11:45', 
    equipeResponsavel: 'Equipe 2' 
  },
];

export default function MaintenanceTable() {
  const [rows, setRows] = React.useState<Maintenance[]>(initialRows);

  const handleEdit = (id: number) => {
    console.log(`Editar manutenção com ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deletado manutenção com ID: ${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="maintenance table">
        <TableHead>
          <TableRow>
            <TableCell>ID da Manutenção</TableCell>
            <TableCell>Carro</TableCell>
            <TableCell>Descrição do Problema</TableCell>
            <TableCell>Data e Hora de Início</TableCell>
            <TableCell>Data e Hora de Fim</TableCell>
            <TableCell>Equipe Responsável</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((maintenance) => (
            <TableRow key={maintenance.idManutencao}>
              <TableCell>{maintenance.idManutencao}</TableCell>
              <TableCell>{maintenance.carro}</TableCell>
              <TableCell>{maintenance.descricaoProblema}</TableCell>
              <TableCell>{maintenance.dataHoraInicio}</TableCell>
              <TableCell>{maintenance.dataHoraFim}</TableCell>
              <TableCell>{maintenance.equipeResponsavel}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => handleEdit(maintenance.idManutencao)}
                  style={{ marginRight: '10px' }}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(maintenance.idManutencao)}
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
