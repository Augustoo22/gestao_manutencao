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
import axios from 'axios';

interface User {
  id: number;
  nomeCompleto: string;
  username: string;
  email: string;
  telefone: string;
  cargo: string;
  nivelAcesso: string;
}

const UsersTable = () => {
  const [rows, setRows] = React.useState<User[]>([]);

  // Função para carregar os usuários do backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/usuarios');
      setRows(response.data); // Armazenar usuários no estado
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  // Carregar usuários quando o componente for montado
  React.useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (id: number) => {
    console.log(`Editar usuário com ID: ${id}`);
    // Redirecionar para a página de edição, passando o id, se necessário
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5050/api/usuarios/${id}`);
      console.log(`Usuário com ID ${id} excluído com sucesso`);
      fetchUsers(); // Recarregar a lista de usuários
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
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
                  href={`/cadastro?id=${user.id}`}  // Redireciona para o cadastro de edição
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
};

export default UsersTable;
