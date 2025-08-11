import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [resumo, setResumo] = useState({hoje: 0, semana: 0, mes: 0});

    useEffect(() => {
        const fetchResumo = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/pagamentos/resumo');
                setResumo(response.data);
            } catch (error) {
                console.error('Erro ao buscar resumo:', error);
            }
        };

        fetchResumo();
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card titulo="Hoje" valor={resumo.hoje} cor="bg-green-500" />
            <Card titulo="Semana" valor={resumo.semana} cor="bg-blue-500" />
            <Card titulo="Mês" valor={resumo.mes} cor="bg-purple-500" />
        </div>
    )
 
    function Card ({ titulo, valor, cor }) {
        return (
            <div className={`${cor} text-white p-6 rounded shadow`}>
                <h3 className="text-lg font-bold">{titulo}</h3>
                <p className="text-2xl font-semibold">{valor.toFixed(2)}</p>
            </div>
        );
    }
}