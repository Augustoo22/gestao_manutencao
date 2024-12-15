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
import api from '../../config/axiosConfigManutencao'; // Certifique-se de que o caminho está correto para sua configuração Axios

interface Manutencao {
  id: number;
  descricao: string;
  dataManutencao: string;
  custo: string;
  veiculoId: number;
}

const ManutencaoTable = () => {
  const [manutencaoData, setManutencaoData] = React.useState<Manutencao[]>([]);

  // Função para carregar manutenções do backend
  const fetchManutencao = async () => {
    try {
      const response = await api.get('/api/manutencao'); // Ajuste conforme necessário
      console.log(response.data);  // Verifique a estrutura dos dados recebidos
      setManutencaoData(response.data); // Armazena as manutenções no estado
    } catch (error) {
      console.error("Erro ao buscar manutenções:", error);
    }
  };

  // Função para editar uma manutenção
  const handleEditManutencao = (id: number) => {
    console.log(`Editar manutenção com ID: ${id}`);
    // Se estiver usando o React Router ou Next.js, prefira usar navegação de roteador
    window.location.href = `/editarManutencao?id=${id}`;  // Ajuste conforme a sua rota
  };

  // Função para excluir uma manutenção
  const handleDeleteManutencao = async (id: number) => {
    try {
      await api.delete(`/api/manutencao/${id}`); // Exclui a manutenção com o id
      console.log(`Manutenção com ID ${id} excluída com sucesso`);
      setManutencaoData(manutencaoData.filter((item) => item.id !== id)); // Atualiza a lista de manutenções
    } catch (error) {
      console.error("Erro ao excluir manutenção:", error);
    }
  };

  React.useEffect(() => {
    fetchManutencao(); // Carrega as manutenções quando o componente for montado
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="manutencao table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Data da Manutenção</TableCell>
            <TableCell>Custo</TableCell>
            <TableCell>Veículo ID</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {manutencaoData.length > 0 ? (
            manutencaoData.map((manutencao) => (
              <TableRow key={manutencao.id}>
                <TableCell>{manutencao.id}</TableCell>
                <TableCell>{manutencao.descricao}</TableCell>
                <TableCell>{manutencao.dataManutencao}</TableCell>
                <TableCell>{manutencao.custo}</TableCell>
                <TableCell>{manutencao.veiculoId}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleEditManutencao(manutencao.id)}
                    style={{ marginRight: '10px' }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteManutencao(manutencao.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                Nenhuma manutenção encontrada.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManutencaoTable;
