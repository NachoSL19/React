import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <header id="main-header">
            <h1>Tienda Moon</h1>
            <nav>
                <a href="#">Inicio </a>
                <a href="#">Nosotros</a>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar;