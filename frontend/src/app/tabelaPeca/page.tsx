import * as React from 'react';
import { Aside } from '../components/aside'; 
import PartsTable from '../components/PartsTable'; 

const Page = () => {
  return (
    <div className="flex">
      <Aside />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciamento de Peças</h1>
        <PartsTable />
      </main>
    </div>
  );
};

export default Page;
