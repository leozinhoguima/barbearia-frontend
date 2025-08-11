import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FinanceReport() {
  const [pagamentos, setPagamentos] = useState([]);
  const [filtros, setFiltros] = useState({
    cliente: '',
    servico: '',
    dataInicial: '',
    dataFinal: ''
  });

  const carregarPagamentos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/pagamentos', {
        params: filtros
      });
      setPagamentos(response.data);
    } catch (error) {
      console.error('Erro ao buscar pagamentos:', error);
    }
  };

  useEffect(() => {
    carregarPagamentos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtros]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Relatório Financeiro</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          name="cliente"
          placeholder="Filtrar por cliente"
          value={filtros.cliente}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="servico"
          placeholder="Filtrar por serviço"
          value={filtros.servico}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="valor"
          name="valor"
          value={filtros.valor}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="date"
          name="dataFinal"
          value={filtros.dataFinal}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>

      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 border">Cliente</th>
            <th className="p-2 border">Serviço</th>
            <th className="p-2 border">Valor</th>
            <th className="p-2 border">Data</th>
          </tr>
        </thead>
        <tbody>
          {pagamentos.map((p) => (
            <tr key={p._id}>
              <td className="p-2 border">{p.cliente}</td>
              <td className="p-2 border">{p.servico}</td>
              <td className="p-2 border">R$ {Number(p.valor).toFixed(2)}</td>
              <td className="p-2 border">{new Date(p.data).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

