import Image from "next/image";
import { FaBuilding, FaTools, FaUsers } from "react-icons/fa";
import { MdDashboard, MdForklift } from "react-icons/md";
import { NavBar } from "./navbar";

export function Aside () {
    return (
        <aside className="w-64 p-6 bg-white/40">
          <Image src={"/image/logo.png"} className="w-full"
           alt="Logo" width={240} height={240} />
          
            <NavBar />
        </aside>
    )
}