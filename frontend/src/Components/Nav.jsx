import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinks = () => {
    return (
        <>
            <p className="cursor-pointer" to="#">Inventario</p>
            <p className="cursor-pointer" to="#">Ventas</p>
            <p className="cursor-pointer" to="#">Analíticas</p>
        </>
    )
}

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="w-1/3 flex justify-end">
                <div className="hidden w-full md:flex justify-between text-white">
                   <NavLinks /> 
                </div>
                <div>
                    <button onClick={toggleNavbar} className="md:hidden text-white">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col items-center
                    basis-full text-white gap-4 transition-transform">
                    <NavLinks />
                </div>
            )}
        </>
    )
}

export default Nav
