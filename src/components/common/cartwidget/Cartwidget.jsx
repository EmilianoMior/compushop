import Badge from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';






const Cartwidget = () => {
    return (
        <div>

            <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon color="action" />
            </Badge>
        </div>
    )
}

export default Cartwidget