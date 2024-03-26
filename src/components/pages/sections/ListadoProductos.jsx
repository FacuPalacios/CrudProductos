import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Producto from "./Producto";
import ModalEditar from "./ModalEditar";

//Clase 22 febrero
const ListadoProductos = () => {
    const [productos, setProductos] = useState([]);

    const [show, setShow] = useState(false);
    const [prodEdit, setProdEdit] = useState(undefined);
    const handleClose = () => {
        setProdEdit(undefined);
        setShow(false);
    };
    const handleShow = (prod) => {
        setProdEdit(prod);
        setShow(true)
    };

    const API = import.meta.env.VITE_API;
    const getProductos = async () => {
        try {
            const response = await fetch(`${API}/productos`);
            //console.log("RESPONSE--> ", response);
            const resJson = await response.json();
            //console.log("RESJSON--> ", resJson);
            setProductos(resJson);
        } catch (error) {
            console.log("Error--> ", error);
        }
    };
    useEffect(() => {
        getProductos();

        return () => {
            setProductos([]);
        }
    }, []);

    //console.log("State Productos--> ", productos);

    return (
        <>
            <ModalEditar show={show} handleClose={handleClose} producto={prodEdit} getProductos={getProductos} />
            <div className="container-fluid">
                <div className="text-center">
                    <h2>Listado Productos</h2>
                </div>
                <div className="table-responsive">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((element) => {
                                return (
                                    <Producto producto={element} handleShow={handleShow} key={element.id} getProductos={getProductos} />
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default ListadoProductos;