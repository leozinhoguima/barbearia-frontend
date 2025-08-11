import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  

  useEffect(() => {
    buscarClientes();
  }, []);

  const buscarClientes = async () => {
    const response = await axios.get('http://localhost:3001/clientes');
    setClientes(response.data);
  };

  const excluirCliente = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
      try {
        await axios.delete(`http://localhost:3001/clientes/${id}`);
        buscarClientes(); // Atualiza a lista
      
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        alert('Erro ao excluir cliente');
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Telefone</th>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Horario</th>
            <th className="px-4 py-2">Atendimento</th>
            <th className="px-4 py-2">Barbeiro</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente._id} className="border-t">
              <td className="px-4 py-2">{cliente.nome}</td>
              <td className="px-4 py-2">{cliente.telefone}</td>
              <td className="px-4 py-2">{cliente.data}</td>
              <td className="px-4 py-2">{cliente.horario}</td>
              <td className="px-4 py-2">{cliente.atentimento}</td>
              <td className="px-4 py-2">{cliente.barbeiro}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => excluirCliente(cliente._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
