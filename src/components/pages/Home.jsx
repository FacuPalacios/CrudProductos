import { useEffect, useState } from "react";
import { Container, Row} from "react-bootstrap";
import axios from "axios";
import CardProducto from "./sections/CardProducto";

const Home = () => {
    const [productos, setProductos] = useState([]);
    const API = import.meta.env.VITE_API;
    const getProductos = async () => {
        try {
            const response = await axios.get(`${API}/productos`);
            console.log("RESPONSE-AXIOS--> ", response);
            /*const products = response.data;
            setProductos(productos);
            LO DE ARRIBA ES LA VERSIÓN LARGA, LO DE ABAJO ES LA VERSIÓN CORTA*/
            setProductos(response.data);
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

    return (
        <div>
            <div className="text-center">
                <h2>Catálogo de Productos</h2>
            </div>
            <div className="my-5">
                <Container fluid="md">
                    <Row>
                        {productos.map((element, index)=>{
                            return(
                                <CardProducto producto={element} key={index}/>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;