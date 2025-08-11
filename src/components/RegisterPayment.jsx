import { useState } from 'react';
import axios from 'axios';

export default function RegisterPayment() {
  const [formData, setFormData] = useState({
    cliente: '',
    valor: '',
    formaPagamento: 'Dinheiro',
    servico: '',
  });

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
        cliente: '',
        valor: '',
        formaPagamento: 'Dinheiro',
        servico: '',
      });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert('Erro ao registrar pagamento.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Registrar Pagamento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="cliente"
          placeholder="Nome do cliente"
          value={formData.cliente}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
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
          <option value="">Opção de pagamento</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Pix">Pix</option>
          <option value="Credito">Crédito</option>
          <option value="Debito">Débito</option>
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
