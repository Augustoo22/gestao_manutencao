import { FaBuilding, FaTools, FaUser } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";

const links = [
    {target: "#", text: "Dashboard", icon: <MdDashboard/>},
    {target: "#", text: "Ambientes", icon: <FaBuilding/>},
    {target: "#", text: "Equipamento", icon: <MdForklift/>},
    {target: "#", text: "Manutenções", icon: <FaTools/>},
    {target: "#", text: "Usuários", icon: <FaUser/>},
];

export function NavBar() {

    return (
        <nav className="space-y-4 flex flex-col mt-8">        
            {links.map((obj)=> (
            <a href={obj.target} className="flex items-center gap-4 hover:font-semibold">
                {obj.icon}
                {obj.text}
            </a>
        ))}
        </nav>
    )

}