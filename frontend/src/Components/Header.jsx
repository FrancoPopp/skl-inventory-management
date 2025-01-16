import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
    return (
        <header className="bg-gray-800 sticky top-0 z-[20]
            mx-auto flex-wrap flex w-full items-center justify-between 
            border-b border-gray-500 px-8 py-2">
            <Logo />
            <Nav />
        </header>
    )
}

export default Header