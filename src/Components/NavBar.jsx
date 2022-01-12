const NavBar = () => {

    return (
        <>
            <nav nav-className="Navbar-menu">
            <ul >
                <li><a href="#home">Home</a></li>
                <li><a href="#news">Promociones</a></li>
                <li><a href="#news">Destacados</a></li>
                <li><a href="#news">Contacto</a></li>
                    <li className="dropdown">
                        <a href="google.com" className="dropbtn">Categorias</a>
                    
                    <div className="dropdown-content">
                        <a href="#">Monitores</a>
                        <a href="#">Gabinetes</a>
                        <a href="#">Procesadores</a>  
                     

                    </div>
               
                   
                    </li>
                </ul>

            </nav>
        
        </>

    )
}

export default NavBar
