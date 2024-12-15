"use client";

import React, { useState, useEffect } from 'react';
import { FaBuilding } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdForklift } from "react-icons/md";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside";
import { Card } from "../components/card";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CardOs } from "../components/cardOs";
import api from '../../config/axiosConfigCarro';

interface Requisition {
  idOs: string;
  responsavel: string;
  status: string;
  carro: string;
  completo: string;
}

export default function Dashboard() {
  const [carrosCount, setCarrosCount] = useState<number>(0); // Estado para contar carros
  const [equipesCount, setEquipesCount] = useState<number>(0); // Estado para contar equipes

  const cards = [
    { qty: carrosCount.toString(), text: "Carros", icon: <FaBuilding size={48} /> },
    { qty: equipesCount.toString(), text: "Equipes", icon: <MdForklift size={48} /> },
    { qty: "100", text: "O.S. Abertas", icon: <GrNotes size={48} /> },
    { qty: "100", text: "O.S. Concluídas", icon: <IoMdCheckboxOutline size={48} /> },
  ];

  const requisitions: Requisition[] = [
    { idOs: "55555", responsavel: "Victor", status: "Aberta", carro: "Gol 94", completo: "-" },
    { idOs: "55556", responsavel: "Victor", status: "Fechada", carro: "Vectra 08", completo: "27-jul" },
    { idOs: "55557", responsavel: "Victor", status: "Aberta", carro: "Golf 2019", completo: "-" },
    // Adicione mais dados conforme necessário
  ];

  // Função para buscar a quantidade de carros cadastrados
  const fetchCarrosCount = async () => {
    try {
      const response = await api.get('/api/veiculos'); // Ajuste para sua API
      setCarrosCount(response.data.length); // Assumindo que response.data seja um array de carros
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
    }
  };

  // Função para buscar a quantidade de equipes cadastradas
  const fetchEquipesCount = async () => {
    try {
      const response = await api.get('/api/equipes'); // Ajuste para sua API de equipes
      setEquipesCount(response.data.length); // Assumindo que response.data seja um array de equipes
    } catch (error) {
      console.error("Erro ao buscar equipes:", error);
    }
  };

  useEffect(() => {
    fetchCarrosCount(); // Carrega a quantidade de carros quando o componente for montado
    fetchEquipesCount(); // Carrega a quantidade de equipes quando o componente for montado
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex h-4/5">
        <Aside />
        <main className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Sistema de Gestão de Manutenção
          </h1>
          <div className="max-h-svh overflow-y-auto">
            <div className="grid grid-cols-4 gap-4 p-6">
              {cards.map((props) => (
                <Card key={props.text} qty={props.qty} text={props.text} icon={props.icon} />
              ))}
            </div>
            <div className="flex gap-2 p-6 pt-1 justify-between">
              <CardOs height="13rem" />
              <div className="m-6 mt-0 p-6 bg-white/80 rounded-xl flex-1">
                <DataTable
                  value={requisitions}
                  paginator
                  rows={5}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  tableStyle={{ minWidth: '50rem', minHeight: '15rem' }}
                  className="data-table"
                >
                  <Column field="idOs" header="ID O.S" style={{ width: '25%' }}></Column>
                  <Column field="responsavel" header="Responsável" style={{ width: '25%' }}></Column>
                  <Column field="status" header="Status" style={{ width: '25%' }}></Column>
                  <Column field="carro" header="Carro" style={{ width: '25%' }}></Column>
                  <Column field="completo" header="Serviço realizado" style={{ width: '25%' }}></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
