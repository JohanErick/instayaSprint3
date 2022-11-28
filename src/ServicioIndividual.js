import axios from 'axios';
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ServicioIndividual({servicio}) {

    const navegar = useNavigate()

    // Función para borrar servicio
    function borrarServicio(idservicio) {
        axios.post('/api/servicio/borrarservicio', {idservicio:idservicio})
        .then(res => {
            console.log(res.data);
            alert(res.data);
            navegar(0);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{servicio.idservicio}</li>
                        <li className='list-group-item'>{servicio.fecha}</li>
                        <li className='list-group-item'>{servicio.jornada}</li>
                        <li className='list-group-item'>{servicio.estado}</li>
                        <li className='list-group-item'>{servicio.ancho}</li>
                        <li className='list-group-item'>{servicio.alto}</li>
                        <li className='list-group-item'>{servicio.largo}</li>
                        <li className='list-group-item'>{servicio.peso}</li>
                        <li className='list-group-item'>{servicio.direccionRecogida}</li>
                        <li className='list-group-item'>{servicio.ciudadRecogida}</li>
                        <li className='list-group-item'>{servicio.cedulaDestinatario}</li>
                        <li className='list-group-item'>{servicio.direccionEntrega}</li>
                        <li className='list-group-item'>{servicio.ciudadEntrega}</li>
                    </ul>

                    <Link to={`/editarservicio/${servicio.idservicio}`}><li className='btn btn-success'>Editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={() => {borrarServicio(servicio.idservicio)}}>Borrar</button>
                    <hr className='mt-4' />
                </div>
                
            </div>
        </div>
    );
}

export default ServicioIndividual;