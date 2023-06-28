// import ccs
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";	
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const  { addItem} = useContext(CartContext)
    
    const handLeOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id, name , price
        }
        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                
            </section>
            <footer className="ItemFooter">
            {
                quantityAdded > 0? (
                     <Link to='/cart' className='Option'>Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handLeOnAdd}/>
                )
            }
          
            </footer>
        </article>
    )
}