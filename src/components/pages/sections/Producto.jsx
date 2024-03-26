import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import BorrarProducto from "./BorrarProducto/BorrarProducto";

const Producto = ({producto, handleShow, getProductos}) => {
    const navigate = useNavigate();
    return (
        <>
            <tr>
                <td>{producto.id}</td>
                <td>{producto.title}</td>
                <td>{producto.description}</td>
                <td>{producto.category}</td>
                <td className="d-flex justify-content-around">
                    <Button type="buttom" variant="warning" onClick={()=>{
                        navigate(`/editar/${producto.id}`);
                    }}>Editar</Button>
                    <Button type="buttom" variant="success" onClick={()=>{
                        console.log("Modal edición");
                        handleShow(producto);
                    }}>M.Editar</Button>
                    {/* <Button type="buttom" variant="danger" onClick={()=>{
                        console.log("Desde boton eliminar");
                    }}>Eliminar</Button> */}
                    <BorrarProducto id={producto.id} getProductos={getProductos}/>
                </td>
            </tr>
        </>
    );
};

export default Producto;