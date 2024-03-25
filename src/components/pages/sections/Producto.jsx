import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Producto = ({producto}) => {
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
                    <Button type="buttom" variant="danger" onClick={()=>{
                        console.log("Desde boton eliminar");
                    }}>Eliminar</Button>
                </td>
            </tr>
        </>
    );
};

export default Producto;