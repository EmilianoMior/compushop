import ItemList from "/.ItemList";

const ItemListContainer = ({ saludo }) => {

    let apellido = "Mior"
    return (
        <ItemList apellido={apellido} saludo={saludo} />
    )
}

export default ItemListContainer