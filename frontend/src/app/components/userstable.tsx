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

interface User {
  id: number;
  nomeCompleto: string;
  username: string;
  email: string;
  telefone: string;
  cargo: string;
  nivelAcesso: string;
}

const initialRows: User[] = [
  { id: 1, nomeCompleto: 'João da Silva', username: 'joaodasilva', email: 'joao@exemplo.com', telefone: '1234-5678', cargo: 'Analista', nivelAcesso: 'Supervisor' },
  { id: 2, nomeCompleto: 'Maria Oliveira', username: 'mariaoliveira', email: 'maria@exemplo.com', telefone: '8765-4321', cargo: 'Técnico', nivelAcesso: 'Funcionário' },
];

export default function UsersTable() {
  const [rows, setRows] = React.useState<User[]>(initialRows);

  const handleEdit = (id: number) => {
    console.log(`Editar usuário com ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Excluir usuário com ID: ${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome Completo</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Nível de Acesso</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.nomeCompleto}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.telefone}</TableCell>
              <TableCell>{user.cargo}</TableCell>
              <TableCell>{user.nivelAcesso}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => handleEdit(user.id)}
                  style={{ marginRight: '10px' }}
                  href='/cadastro'
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(user.id)}
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
