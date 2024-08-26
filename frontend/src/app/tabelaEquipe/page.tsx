import * as React from 'react';
import { Aside } from '../components/aside'; 
import TeamsTable from '../components/TeamsTable';  

const Page = () => {
  return (
    <div className="flex">
      <Aside />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciamento de Equipe</h1>
        <TeamsTable />
      </main>
    </div>
  );
};

export default Page;
