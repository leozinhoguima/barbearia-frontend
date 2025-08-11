import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function EditarCliente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [atendimento, setAtendimento] = useState("");
  const [barbeiro, setBarbeiro] = useState("");

  useEffect(() => {
    api.get(`/clientes/${id}`)
      .then(res => {
        setNome(res.data.nome);
        setTelefone(res.data.telefone);
        setTelefone(res.data.data);
        setTelefone(res.data.horario);
        setAtendimento(res.data.atendimento);
        setBarbeiro(res.data.barbeiro);
      })
      .catch(err => console.error("Erro ao carregar cliente:", err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/clientes/${id}`, { nome, telefone, data, horario, atendimento, barbeiro });
      navigate("/clientes");
    } catch (err) {
      console.error("Erro ao editar cliente:", err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Editar Cliente</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <input
          type=""
          className="w-full border p-2 rounded"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
        
        <input
          type="tel"
          className="w-full border p-2 rounded"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <input
          type="text"
          className="w-full border p-2 rounded"
          value={atendimento}
          onChange={(e) => setAtendimento(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded"
          value={barbeiro}
          onChange={(e) => setBarbeiro(e.target.value)}
        >
          <option value="">Selecione o barbeiro</option>
          <option value="João">João</option>
          <option value="Matheus">Matheus</option>
          <option value="Jonas">Thieres</option>
          <option value="Thieres">Thieres</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}
