import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function NovoCliente() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [atendimento, setAtentimento] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [barbeiro, setBarbeiro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/clientes", { nome, telefone, atendimento, data, horario, barbeiro });
      navigate("/clientes");
    } catch (err) {
      console.error("Erro ao cadastrar cliente:", err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">Agendar Cliente</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text"
          placeholder="Nome"
          className="w-full border p-2 rounded"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="w-full border p-2 rounded"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <input
          type="time"
          className="w-full border p-2 rounded"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />

        <select placeholder="corte,barba ou corte + barba"
        className="w-full border p-2 rounded"
        value={atendimento}
        onChange={(e) => setAtentimento(e.target.value)}
        >
          <option value="">Selecione o Atendimento</option>
          <option value="Corte">Corte</option>
          <option value="Barba">Barba</option>
          <option value="Corte + Barba">Corte + Barba</option>
        </select>


        <select
        className="w-full border p-2 rounded"
        value={atendimento}
        onChange={(e) => setBarbeiro(e.target.value)}
        >
          <option value="">Selecione o Barbeiro</option>
          <option value="João">João</option>
          <option value="Matheus">Matheus</option>
          <option value="Jonas">Jonas</option>
          <option value="Thieres">Thieres</option>
        </select>
      

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">
          Cadastrar
        </button>

      </form>
    </div>
  );
}
