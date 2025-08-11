import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ClienteCard({ cliente, onDelete }) {
  const navigate = useNavigate();
  const [horarioExpirado, setHorarioExpirado] = useState(false);

  useEffect(() => {
    const verificarHorarioExpirado = () => {
      const dataHoraCliente = new Date(`${cliente.data}T${cliente.horario}`);

      const agora = new Date();
      setHorarioExpirado(dataHoraCliente < agora);
    };

    verificarHorarioExpirado();
  }, [cliente.data, cliente.horario]);

  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{cliente.nome}</h2>
        <p className="text-gray-600">Telefone: {cliente.telefone}</p>
        <p className="text-gray-600">Data: {cliente.data}</p>
        <p className="text-gray-600">Horário: {cliente.horario}</p>
        {horarioExpirado && (
          <p className="text-red-600 font-bold">⚠ Horário expirado</p>
        )}
        <p className="text-gray-600">Atendimento: {cliente.atendimento}</p>
        <p className="text-gray-600">Barbeiro: {cliente.barbeiro}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => navigate(`/editar/${cliente.id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(cliente._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

