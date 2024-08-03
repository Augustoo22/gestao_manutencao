import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";


export function NavBar() {
    const links = [
        {target: "#", text: "Dashboard", icon: <MdDashboard />},
        {target: "#", text: "Ambientes", icon: <FaBuilding />},
        {target: "#", text: "Equipamentos", icon: <MdForklift />},
        {target: "#", text: "Manutenções", icon: <FaTools />},
        {target: "#", text: "Usuários", icon: <FaUsers />},
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
