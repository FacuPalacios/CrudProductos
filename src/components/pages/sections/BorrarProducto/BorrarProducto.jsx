import axios from "axios";
import "./borrarProducto.css"
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const BorrarProducto = ({ id, getProductos }) => {
    const API = import.meta.env.VITE_API;
    /*Siempre que hay un async, hay un try-catch */
    const handleDelete = async () => {
        Swal.fire({
            title: "¿Estás seguro de eliminar este producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "No, me equivoqué"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`${API}/productos/` + id); /*El await es para que espere el axios, y no pase directo al getProductos() */
                    getProductos();
                } catch (error) {
                    console.log("ERROR--> ", error);
                }
            }

            try {

            } catch (error) {
                console.log("ERROR --> ", error.message);
            }
        }
    )}
    return (
            <Button type="buttom" variant="danger" onClick={handleDelete}>Eliminar</Button>
            // <Button type="buttom" className="testeando" onClick={handleDelete}>Eliminar</Button> // Para poner una clase de css, puedo poner como classname y el nombre del css
        );
    };

    export default BorrarProducto;