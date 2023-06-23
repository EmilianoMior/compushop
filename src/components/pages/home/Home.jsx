
import Navbar from "../../layout/NavBar/NavBar"


const Home = ({ nombre }) => {

    return (
        <div >
            <Navbar>

                <p className="Cartel">Bienvenidos a {nombre}</p>

            </Navbar>





        </div >
    )
}

export default Home