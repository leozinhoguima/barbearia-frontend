import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
        <ul className="flex gap-4">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/clientes/novo">Cliente</Link></li>
          <li><Link to="/clientes"> Lista de Clientes</Link></li>
          <li><Link to ="/pagamento">Pagamento</Link></li>
          <li><Link to ="/pagamento/lista">Lista de Pagamentos</Link></li>
          <li><Link to ="/relatorios">Relatórios</Link></li>
          <li><Link to ="/dashboard">Dashboard</Link></li>
        </ul>
    </nav>
  );
}