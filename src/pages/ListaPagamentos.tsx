import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RegisterPayment() {
  const [formData, setFormData] = useState({
    clienteId: '',
    barbeiroId: '',
    valor: '',
    formaPagamento: 'Dinheiro',
    servico: '',
  });

  type Pessoa = { _id: string; nome: string };

  const [clientes, setClientes] = useState<Pessoa[]>([]);
  const [barbeiros, setBarbeiros] = useState<Pessoa[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resClientes = await axios.get('http://localhost:5000/clientes');
      const resBarbeiros = await axios.get('http://localhost:5000/barbeiros'); // Crie essa rota

      setClientes(resClientes.data);
      setBarbeiros(resBarbeiros.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/pagamentos', formData);
      alert('Pagamento registrado com sucesso!');
      setFormData({
        clienteId: '',
        barbeiroId: '',
        valor: '',
        formaPagamento: 'Dinheiro',
        servico: '',
      });
    } catch (error) {
      alert('Erro ao registrar pagamento.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Registrar Pagamento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        
        <select
          name="clienteId"
          value={formData.clienteId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecione um cliente</option>
          {clientes.map(c => (
            <option key={c._id} value={c._id}>{c.nome}</option>
          ))}
        </select>

        
        <select
          name="barbeiroId"
          value={formData.barbeiroId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecione um barbeiro</option>
          <option value="">João</option>
          <option value="">Matheus</option>
          <option value="">Jonas</option>
          <option value="">Thieres</option>
          {barbeiros.map(b => (
            <option key={b._id} value={b._id}>{b.nome}</option>
          ))}
        </select>

        
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={formData.valor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="formaPagamento"
          value={formData.formaPagamento}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>Dinheiro</option>
          <option>Pix</option>
          <option>Cartão</option>
        </select>
        <input
          type="text"
          name="servico"
          placeholder="Serviço (opcional)"
          value={formData.servico}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Salvar Pagamento
        </button>
      </form>
    </div>
  );
}

