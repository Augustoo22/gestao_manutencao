import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDashboard, MdForklift } from "react-icons/md";
import { Footer } from "./components/footer";
import { Aside } from "./components/aside";
import { Card } from "./components/card";

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
    { id: 233232, name: 'Victor', status: 'Fechada' },
    { id: 23233, name: 'Victor', status: 'Fechada' },
    { id: 232321, name: 'Victor', status: 'Aberta' },
  ];

  const tableColumns = [
    { header: 'ID O.S', key: 'id' },
    { header: 'Responsável', key: 'name' },
    { header: 'Status', key: 'status' },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex overflow-hidden">
        <Aside />
        <main className="flex-1 flex flex-col">
          <header className="w-full bg-white/40 p-6 text-center">
            <h1 className="text-4xl font-bold uppercase">Sistema de Gestão de Manutenção</h1>
          </header>
          <div className="grid grid-cols-4 gap-4 p-6">
            <Card
              color="bg-orange-200"
              qty="100"
              text="Ambientes"
              icon={<FaBuilding size={48} />}
            />
            <Card
              color="bg-blue-200"
              qty="100"
              text="Equipamentos"
              icon={<MdForklift size={48} />}
            />
            <Card
              color="bg-red-200"
              qty="100"
              text="O.S. Abertas"
              icon={<GrNotes size={48} />}
            />
            <Card
              color="bg-green-200"
              qty="100"
              text="O.S. Concluídas"
              icon={<IoMdCheckboxOutline size={48} />}
            />
          </div>
          <div className="p-2 overflow-x-auto">
            <div className="relative max-h-96 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50 sticky top-0 z-15">
                  <tr>
                    {tableColumns.map((column) => (
                      <th
                        key={column.key}
                        className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {column.header}
                      </th>
                    ))}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData.map((row, index) => (
                    <tr key={`${row.id}-${index}`}>
                      {tableColumns.map((column) => (
                        <td
                          key={column.key}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300"
                        >
                          {row[column.key]}
                        </td>
                      ))}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">
                        <button className="text-blue-600 hover:text-blue-900">
                          Editar
                        </button>
                        <button className="text-red-600 hover:text-red-900 ml-4">
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
