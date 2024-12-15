import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

export function NavBar() {
    const links = [
        { target: "/dashboard", text: "Dashboard", icon: <MdDashboard /> },
        { target: "/cadastroCarro", text: "Cadastro de Carro", icon: <FaBuilding /> },
        { target: "/cadastro", text: "Cadastro Usuario", icon: <FaUsers /> },
        { target: "/tabelacar", text: "Tabela Carro", icon: <FaTools /> },
        { target: "/tabelausuario", text: "Tabela Usuários", icon: <FaUsers /> },
        { target: "/cadastroManutencao", text: "Cadastro de Manutenção", icon: <MdForklift /> },
        { target: "/tabelaManutencao", text: "Tabela de Manutenção", icon: <FaTools /> },
        { target: "/cadastroEquipe", text: "Cadastro Equipe", icon: <FaBuilding /> },
        { target: "/tabelaEquipe", text: "Tabela Equipes", icon: <FaUsers /> },
        { target: "/cadastroPeca", text: "Cadastro Peças", icon: <FaTools /> },
        { target: "/tabelaPeca", text: "Tabela Peças", icon: <FaBuilding /> },
    ];

    return (
        <nav className="flex flex-col justify-between h-full p-4">
            <div className="space-y-4">
                {links.map((obj, index) => (
                    <a
                        key={index} // Adiciona o índice como key
                        href={obj.target}
                        className="flex items-center gap-4 text-white hover:font-semibold"
                    >
                        {obj.icon}
                        {obj.text}
                    </a>
                ))}
            </div>
        </nav>
    );
}
