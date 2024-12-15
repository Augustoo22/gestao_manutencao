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
import api from '../../config/axiosConfigCarro';  // Verifique se o caminho está correto para sua configuração Axios

interface Car {
  id: number;
  marca: string;
  modelo: string;
  anoFabricacao: string;
  numeroPlaca: string;
  cor: string;
  status: string;
  ultimaManutencao: string;
  proximaManutencaoProgramada: string;
  observacoes: string;
}

const CarsTable = () => {
  const [rows, setRows] = React.useState<Car[]>([]);

  // Função para carregar os carros do backend
  const fetchCars = async () => {
    try {
      const response = await api.get('api/veiculos');  // Ajuste a URL conforme necessário
      setRows(response.data); // Armazenar carros no estado
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
    }
  };

  // Carregar carros quando o componente for montado
  React.useEffect(() => {
    fetchCars();
  }, []);

  // Função para editar um carro
  const handleEdit = (id: number) => {
    console.log(`Editar carro com ID: ${id}`);
    // Redirecionar para a página de edição, passando o id, se necessário
    window.location.href = `/editarCarro?id=${id}`;  // Ajuste conforme sua rota de edição
  };

  // Função para excluir um carro
  const handleDelete = async (id: number) => {
    try {
      await api.delete(`api/veiculos/${id}`);  // Exclui o carro com o id
      console.log(`Carro com ID ${id} excluído com sucesso`);
      setRows(rows.filter((car) => car.id !== id)); // Atualiza a lista de carros
    } catch (error) {
      console.error("Erro ao excluir carro:", error);
    }
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
                  href={`/editarCarro?id=${car.id}`} // Rota para editar o carro
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
};

export default CarsTable;
