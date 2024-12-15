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
import api from '../../config/axiosConfig'

interface Part {
  id: number;
  nome: string;
  codigo: string;
  categoria: string;
  quantidadeEstoque: number;
  fornecedor: string;
}

export default function PartsTable() {
  const [rows, setRows] = React.useState<Part[]>([]);

  // Função para carregar as peças da API
  const fetchParts = async () => {
    try {
      const response = await api.get('/api/pecas');
      setRows(response.data); // Atualiza o estado com as peças
    } catch (error) {
      console.error('Erro ao buscar peças:', error);
    }
  };

  React.useEffect(() => {
    fetchParts(); // Carrega as peças ao montar o componente
  }, []);

  // Função para editar a peça
  const handleEdit = (id: number) => {
    console.log(`Editar peça com ID: ${id}`);
    // Implemente lógica de edição aqui (abrir um modal ou redirecionar para outra página)
  };

  // Função para deletar a peça
  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/api/pecas/${id}`);
      setRows(rows.filter(part => part.id !== id)); // Atualiza o estado removendo a peça deletada
      console.log(`Peça com ID ${id} deletada`);
    } catch (error) {
      console.error('Erro ao deletar peça:', error);
    }
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
