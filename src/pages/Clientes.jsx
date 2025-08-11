import { useEffect, useState } from 'react';
import api from '../services/api';
import ClienteCard from '../components/ClienteCard';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get('/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error('Erro ao buscar clientes:', error));
  }, []);

const handleDelete = async (id) => {
  if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
    try {
      await api.delete(`/clientes/${id}`);
      setClientes((prev) => prev.filter((cliente) => cliente._id !== id)); 
    } catch (err) {
      console.error("Erro ao excluir cliente:", err);
    }
  }
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de Clientes</h1>
      {clientes.map(cliente => (
        <ClienteCard key={cliente.id} cliente={cliente} onDelete={handleDelete} />
      ))}
    </div>
  );
}