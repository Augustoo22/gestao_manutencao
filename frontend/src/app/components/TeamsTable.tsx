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
import { format } from 'date-fns';
import api from '../../config/axiosConfigEquipe';

interface TableColumn {
  id: string;
  label: string;
  minWidth?: number;
}

interface Team {
  id: number;
  nomeEquipe: string;
  liderEquipe: string;
  numeroMembros: number;
  dataFormacao: string;
  areaAtuacao: string;
}

interface GenericTableProps<T> {
  rows: T[];
  columns: TableColumn[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function GenericTable<T extends { id: number }>({
  rows,
  columns,
  onEdit,
  onDelete
}: GenericTableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="generic table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.id === 'dataFormacao'
                    ? format(new Date(row[column.id as keyof T] as string), 'dd/MM/yyyy')
                    : String(row[column.id as keyof T])}
                </TableCell>
              ))}
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => onEdit(row.id)}
                  style={{ marginRight: '10px' }}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => onDelete(row.id)}
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

export default function TeamsTable() {
  const [rows, setRows] = React.useState<Team[]>([]);

  React.useEffect(() => {
    // Carregar as equipes da API
    api.get('/api/equipes')
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar equipes', error);
      });
  }, []);

  const handleEdit = (id: number) => {
    console.log(`Editar equipe com ID: ${id}`);
    // Lógica de edição da equipe aqui
  };

  const handleDelete = (id: number) => {
    console.log(`Excluir equipe com ID: ${id}`);
    // Deletar a equipe via API
    api.delete(`/api/equipes/${id}`)
      .then(() => {
        // Atualiza a tabela após exclusão
        setRows(rows.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.error('Erro ao excluir equipe', error);
      });
  };

  const columns: TableColumn[] = [
    { id: 'nomeEquipe', label: 'Nome da Equipe' },
    { id: 'liderEquipe', label: 'Líder da Equipe' },
    { id: 'numeroMembros', label: 'Número de Membros' },
    { id: 'dataFormacao', label: 'Data de Formação', minWidth: 150 },
    { id: 'areaAtuacao', label: 'Área de Atuação' },
  ];

  return (
    <GenericTable
      rows={rows}
      columns={columns}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
