import NavBar from './NavBar'
import Cart from './CartWidget'


const Header=(greeting) =>{
    return (
        <>
            <header className="main-header"> 
                <NavBar/>
                <p className="Cartel">Bienvenidos a {greeting.nombre}</p>
                <Cart/>

            </header>

        </>
    )
}

export default Header
