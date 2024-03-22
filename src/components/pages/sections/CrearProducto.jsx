import { Form, Button, FormGroup } from "react-bootstrap";

const CrearProducto = () => {
    //Los productos van a tener las sig prop: Título, descripción, categoría. Además tendrá un identificador único
    const handleSubmit=(e)=>{ {/* Acá se crea la lógica para validar, antes del return */}
        e.preventDefault();
        console.log('Desde submit')
    }

    return (
        <div className="container py-3 my-3">
            <div className="text-center">
                <h2>Crear Productos</h2>
            </div>
            <Form onSubmit={handleSubmit}> {/* handleSubmit: Ésto es para validar */}
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el título del producto" minLength={4} maxLength={20} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la descripción" as="textarea" rows={3} minLength={4} maxLength={200} /> {/*as y rows es para espaciar la descripcion*/}
                </Form.Group>

                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select aria-label="category">
                        <option value=''>Seleccione una categoría</option>
                        <option value="bebidas">Bebidas</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="limpieza">Limpieza</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </div>
    );
};

export default CrearProducto;