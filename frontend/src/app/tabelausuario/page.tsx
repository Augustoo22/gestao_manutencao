import * as React from 'react';
import { Aside } from '../components/aside'; 
import UsersTable from '../components/userstable'; 

const Page = () => {
  return (
    <div className="flex">
      <Aside />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Tabela de Usuários</h1>
        <UsersTable />
      </main>
    </div>
  );
};

export default Page;
