import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";


export function NavBar() {
    const links = [
        {target: "/dashboard", text: "Dashboard"},
        {target: "/cadastroCarro", text: "Cadastro de Carro"},
        {target: "/cadastro", text: "Cadastro Usuario"},
        {target: "/tabelacar", text: "Tabela Carro"},
        {target: "/tabelausuario", text: "Tabela Usuários"},
        {target: "/cadastroManutencao", text: "Cadastro de Manutenção"},
        {target: "/tabelaManutencao", text: "Tabela de Manutenção "},
        {target: "/cadastroEquipe", text: "Cadastro Equipe"},
        {target: "/tabelaEquipe", text: "Tabela Equipes"},
        {target: "", text: "Cadastro Peças"},
        {target: "", text: "Tabela Peças"},
    ];

    return (
        <nav className="flex flex-col justify-between h-full p-4 ">
            <div className="space-y-4">
                {links.map((obj) => (
                    <a href={obj.target} className="flex items-center gap-4 text-white hover:font-semibold">
                        {obj.icon}
                        {obj.text}
                    </a>
                ))}
            </div>
        </nav>
    );
}
