import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validarCategoria } from "../../helpers/validaciones";
import clsx from "clsx";
import * as Yup from "yup"; /*Clase 20 febrero 1:35 */
import { useFormik } from "formik"; /*Clase 20 febrero 1:35 */
import Swal from 'sweetalert2' /*Clase 22 febrero 0:50 */
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
    //Los productos van a tener las sig prop: Título, descripción, categoría. Además tendrá un identificador único
    /*const[title, setTitle]=useState('');
    const[description, setDescription]=useState('');
    const[category, setCategory]=useState('');*/

    // Con lo de arriba se lo hace a mano, abajo se usa Formik

    //Utilizamos la variable de entorno
    const API = import.meta.env.VITE_API;
    //console.log("API--> ", API);

    //Utilizamos useNavigate de react router dom
    const navigate = useNavigate();
    //Inicio config formik

    const ProductoSchema=Yup.object().shape({
        title: Yup.string().min(4, 'min 4 caract.').max(20, 'max 20 caract.').required('el titulo es requerido'),
        description: Yup.string().min(4, 'min 4 caract.').max(200, 'max 200 caract.').required('la descripcion es requerida'),
        category: Yup.string().required('La categoría es requerida')
        }    
    );
    const initialValues={
        title: '',
        description: '',
        category: ''
    };
    const formik=useFormik({
        initialValues,
        validationSchema: ProductoSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values)=>{
            console.log("Values de Formik --> ", values);
            Swal.fire({
                title: "¿Estás seguro de guardar este producto?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Guardar"
              }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const response = await fetch(`${API}/productos`, {
                            method: "POST",
                            headers:{
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(values)
                        });
                        //console.log("RESPONSE: ", response);
                        //console.log(response.status);
                        if(response.status === 201){
                            formik.resetForm();

                            Swal.fire({
                                title: "¡Éxito!",
                                text: "Se creó un nuevo producto",
                                icon: "success"
                            });
                            navigate('/administracion');
                        }
                    } catch (error) {
                        console.log("ERROR--> ", error);
                    }
                }
              });
            
            
        }
    })
    //Fin config formik

    /* Acá se crea la lógica para validar, antes del return */
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Desde submit');
        const nuevoProducto={
            titulo: title,
            descripcion: description,
            category: category
        };
        console.log("nuevo Producto: ", nuevoProducto);
    }

    return (
        <div className="container py-3 my-3">
            <Button variant="secondary" onClick={()=>navigate(-1)}>Atrás</Button> {/* -1: Detecta la ruta anterior*/}
            <div className="text-center">
                <h2>Crear Productos</h2>
            </div>

            <Form onSubmit={formik.handleSubmit}> {/* handleSubmit: Ésto es para validar */}
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el título del producto" minLength={4} maxLength={20} /*value={title}
                        onChange={(e)=>{
                        setTitle(e.currentTarget.value);
                        }}*/
                        name="title"
                        {...formik.getFieldProps('title')}
                        className={clsx('form-control',{
                            'is-invalid': formik.touched.title && formik.errors.title
                        },{
                            'is-valid': formik.touched.title && !formik.errors.title
                        })}
                    />
                    {formik.touched.title && formik.errors.title && (
                        <div className="mt-2 text-danger fw-bolder">
                            <span role='alert'>{formik.errors.title}</span>
                        </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la descripción" as="textarea" rows={3} minLength={4} maxLength={200} /*value={description}
                    onChange={(e)=>{
                    setDescription(e.currentTarget.value);
                    }} {/*as y rows es para espaciar la descripcion* /} */
                        name="description"
                        {...formik.getFieldProps('description')}
                        className={clsx('form-control',{
                            'is-invalid': formik.touched.description && formik.errors.description
                        },{
                            'is-valid': formik.touched.description && !formik.errors.description
                        })}
                    />
                    {formik.touched.description && formik.errors.description && (
                        <div className="mt-2 text-danger fw-bolder">
                            <span role='alert'>{formik.errors.description}</span>
                        </div>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select aria-label="category" /*value={category} onChange={(e)=>{
                        let resultado = validarCategoria(e.currentTarget.value);
                        console.log("resultado de validar: ", resultado);
                        setCategory(e.currentTarget.value);
                    }} className={clsx("form-select",{ /*Clase 20 febrero 1:30 el className* /
                        "is-valid": validarCategoria(category)
                    },{
                        "is-invalid": !validarCategoria(category)
                    })}*/
                        name="category"
                        {...formik.getFieldProps('category')}
                        className={clsx('form-control',{
                            'is-invalid': formik.touched.category && formik.errors.category
                        },{
                            'is-valid': formik.touched.category && !formik.errors.category
                        })}
                    >
                        <option value=''>Seleccione una categoría</option>
                        <option value="bebidas">Bebidas</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="limpieza">Limpieza</option>
                    </Form.Select>
                    {formik.touched.category && formik.errors.category && (
                        <div className="mt-2 text-danger fw-bolder">
                            <span role='alert'>{formik.errors.category}</span>
                        </div>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </div>
    );
};

export default CrearProducto;