import Image from "next/image";
import { NavBar } from "./navbar";

export function Aside() {
    return (
        <aside className="w-64 p-6 flex flex-col justify-between border-r-2"
               style={{ backgroundColor: 'rgb(68,68,68)', height: '100vh' }}>
            <div>
                <Image 
                    src={"/image/logo.png"} 
                    className="w-full" 
                    alt="Logo" 
                    width={240} 
                    height={240} 
                />
                <NavBar />
            </div>
        </aside>
    );
}
