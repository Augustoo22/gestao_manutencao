import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDashboard, MdForklift } from "react-icons/md";
import { Footer } from "./components/footer";
import { Aside } from "./components/aside";
import { Card } from "./components/card";
import { Table } from "./components/table";

export default function Home() {
  const tableData = [
    { id: 232321, name: 'Victor', status: 'Aberta' },
    { id: 233232, name: 'Victor', status: 'Fechada' },
    { id: 23233, name: 'Victor', status: 'Fechada' },
    { id: 232321, name: 'Victor', status: 'Aberta' },
    { id: 233232, name: 'Victor', status: 'Fechada' },
    { id: 23233, name: 'Victor', status: 'Fechada' },
    { id: 232321, name: 'Victor', status: 'Aberta' },
    { id: 233232, name: 'Victor', status: 'Fechada' },
    { id: 23233, name: 'Victor', status: 'Fechada' },
  ];

  const tableColumns = [
    { header: 'ID O.S', key: 'id' },
    { header: 'Responsavel', key: 'name' },
    { header: 'Status', key: 'status' },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col">
          <header className="w-full bg-white/40 p-6 text-center">
            <h1 className="text-4xl font-bold uppercase">Sistema de Gestão de Manutenção</h1>
          </header>
          <div className="grid grid-cols-4 gap-4 p-6">
            <Card
              color="bg-orange-200"
              qty="200"
              text="Ambientes"
              icon={<FaBuilding size={48} />}
            />
            <Card
              color="bg-blue-200"
              qty="200"
              text="Equipamentos"
              icon={<MdForklift size={48} />}
            />
            <Card
              color="bg-red-200"
              qty="200"
              text="O.S. Abertas"
              icon={<GrNotes size={48} />}
            />
            <Card
              color="bg-green-200"
              qty="200"
              text="O.S. Concluídas"
              icon={<IoMdCheckboxOutline size={48} />}
            />
          </div>
          <div className="p10 overflow-auto">
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <Table data={tableData} columns={tableColumns} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
