"use client";

import * as React from 'react';
import { Aside } from '../components/aside'; 
import MaintenanceTable from '../components/manutencaoTable'; // Importando corretamente com a letra maiúscula

const Page = () => {
  return (
    <div className="flex">
      <Aside />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciamento de Manutenção</h1>
        <MaintenanceTable /> {/* Usando o componente com a letra maiúscula */}
      </main>
    </div>
  );
};

export default Page;
