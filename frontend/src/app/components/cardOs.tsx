import React from 'react';

export function CardOs({ height = 'auto' }) {
  const abertaOS = 44;
  const fechadaOS = 44;
  const totalOS = abertaOS + fechadaOS;

  return (
    <div
      className="flex flex-col justify-between bg-white p-6 rounded-xl shadow-lg"
      style={{ height }}
    >
      <div className="flex w-full justify-around items-center border-b-2 pb-4 mb-4">
        <div className="flex flex-col items-center text-gray-800">
          <span className="text-sm">Ordem de Serviços Aberta</span>
          <span className="text-4xl font-bold text-red-600">{abertaOS}</span>
        </div>
        <div className="border-r-2 h-full mx-4"></div>
        <div className="flex flex-col items-center text-gray-800">
          <span className="text-sm">Ordem de Serviços Fechada</span>
          <span className="text-4xl font-bold text-green-600">{fechadaOS}</span>
        </div>
      </div>
      <div className="flex flex-col items-center text-gray-800">
        <span className="text-sm">Total</span>
        <span className="text-4xl font-bold text-blue-600">{totalOS}</span>
      </div>
    </div>
  );
}
