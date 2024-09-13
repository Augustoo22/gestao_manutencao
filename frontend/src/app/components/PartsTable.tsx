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

interface Part {
  id: number;
  nome: string;
  codigo: string;
  categoria: string;
  quantidadeEstoque: number;
  fornecedor: string;
}

const initialRows: Part[] = [
  { 
    id: 1, 
    nome: 'Filtro de Óleo', 
    codigo: 'FO123', 
    categoria: 'Filtros', 
    quantidadeEstoque: 10, 
    fornecedor: 'Fornecedor A' 
  },
  { 
    id: 2, 
    nome: 'Pastilha de Freio', 
    codigo: 'PF456', 
    categoria: 'Freios', 
    quantidadeEstoque: 25, 
    fornecedor: 'Fornecedor B' 
  },
];

export default function PartsTable() {
  const [rows, setRows] = React.useState<Part[]>(initialRows);

  const handleEdit = (id: number) => {
    console.log(`Editar peça com ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deletar peça com ID: ${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="parts table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome da Peça</TableCell>
            <TableCell>Código</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Quantidade em Estoque</TableCell>
            <TableCell>Fornecedor</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((part) => (
            <TableRow key={part.id}>
              <TableCell>{part.id}</TableCell>
              <TableCell>{part.nome}</TableCell>
              <TableCell>{part.codigo}</TableCell>
              <TableCell>{part.categoria}</TableCell>
              <TableCell>{part.quantidadeEstoque}</TableCell>
              <TableCell>{part.fornecedor}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => handleEdit(part.id)}
                  style={{ marginRight: '10px' }}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(part.id)}
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
