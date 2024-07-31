import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface TableProps {
  data: { [key: string]: string | number }[];
  columns: { header: string, key: string }[];
}

export function Table({ data, columns }: TableProps) {
  return (
    <div className="overflow-auto max-h-[400px] bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row[column.key]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
