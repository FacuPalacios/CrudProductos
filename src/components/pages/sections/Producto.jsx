import { Button } from "react-bootstrap";

const Producto = ({producto}) => {
    return (
        <>
            <tr>
                <td>{producto.id}</td>
                <td>{producto.title}</td>
                <td>{producto.description}</td>
                <td>{producto.category}</td>
                <td className="d-flex justify-content-around">
                    <Button type="buttom" variant="warning">Editar</Button>
                    <Button type="buttom" variant="danger">Eliminar</Button>
                </td>
            </tr>
        </>
    );
};

export default Producto;