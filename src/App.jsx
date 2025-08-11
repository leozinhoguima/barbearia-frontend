import {Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Clientes from "./pages/Clientes"
import NovoCliente from "./pages/NovoCliente"
import EditarCliente from "./pages/EditarClientes"
import RegisterPayment from "./components/RegisterPayment"
import ListaPagamentos from "./pages/ListaPagamentos"
import FinanceReport from "./pages/FinanceReport"
import Dashboard from "./pages/Dashboard";

function App() {
  return (
   <>
     <NavBar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/novo" element={<NovoCliente />} />
        <Route path="editar/:id" element={<EditarCliente />} />
        <Route path="/pagamento" element={<RegisterPayment />} />
        <Route path="/pagamento/lista" element={<ListaPagamentos /> } />
        <Route path="/relatorios" element={<FinanceReport />} />
        <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
   </>
  );
}

export default App