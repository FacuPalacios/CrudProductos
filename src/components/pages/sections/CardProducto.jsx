import { Card, Button, Col } from "react-bootstrap";
import imagen from "../../../assets/react.svg" /*PARA IMPORTAR IMÁGENES clase 29 febrero al último*/

const CardProducto = ({producto}) => {
    return (
        <Col xs={12} md={6}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} /> {/*Para poner una imagen, clase 29 febrero al último*/}
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                        <span className="mb-2">{producto.description}</span>
                        <span className="fs-4">{producto.category}</span>
                    </Card.Text>
                    <Button variant="primary">Ver más</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;