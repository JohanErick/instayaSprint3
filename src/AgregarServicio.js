import React from 'react';
import { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';

function AgregarServicio() {
   
    // Hooks 
    const [fecha, setFecha] = useState('');
    const [jornada, setJornada] = useState('');
    const [estado, setEstado] = useState('');
    const [ancho, setAncho] = useState('');
    const [alto, setAlto] = useState('');
    const [largo, setLargo] = useState('');
    const [peso, setPeso] = useState('');
    const [direccionRecogida, setDireccionRecogida] = useState('');
    const [ciudadRecogida, setCiudadRecogida] = useState('');
    const [nombreDestinatario, setNombreDestinatario] = useState('');
    const [cedulaDestinatario, setCedulaDestinatario] = useState('');
    const [direccionEntrega, setDireccionEntrega] = useState('');
    const [ciudadEntrega, setCiudadEntrega] = useState('');

    const navegar = useNavigate();


    function agregarServicio() {
        var servicio = {
            fecha: fecha,
            jornada: jornada,
            estado: estado,
            ancho: ancho,
            alto: alto,
            largo: largo,
            peso: peso,
            direccionRecogida: direccionRecogida,
            ciudadRecogida: ciudadRecogida,
            nombreDestinatario: nombreDestinatario,
            cedulaDestinatario: cedulaDestinatario,
            direccionEntrega: direccionEntrega,
            ciudadEntrega: ciudadEntrega,
            idservicio: uniquid()
        }
             
        console.log(servicio);

        axios.post('/api/servicio/agregarservicio', servicio)
        .then(res => {
            alert(res.data);
            navegar(0);
        })
        .then(err => {console.log(err)});

    }

    return (
        
        <div className='container'>
            <Menu />
            <div className='row'>
                <h2 className='mt-4'>Crear un nuevo servicio</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='fecha' className='form-label'>Fecha</label>
                        <input type='text' className='form-control' value={fecha} onChange={(e) => {setFecha(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='jornada' className='form-label'>Jornada</label>
                        <input type='text' className='form-control' value={jornada} onChange={(e) => {setJornada(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='estado' className='form-label'>Estado</label>
                        <input type='text' className='form-control' value={estado} onChange={(e) => {setEstado(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='ancho' className='form-label'>Ancho</label>
                        <input type='text' className='form-control' value={ancho} onChange={(e) => {setAncho(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='alto' className='form-label'>Alto</label>
                        <input type='text' className='form-control' value={alto} onChange={(e) => {setAlto(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='largo' className='form-label'>Largo</label>
                        <input type='text' className='form-control' value={largo} onChange={(e) => {setLargo(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='peso' className='form-label'>Peso</label>
                        <input type='text' className='form-control' value={peso} onChange={(e) => {setPeso(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='direccionRecogida' className='form-label'>Dirección recogida</label>
                        <input type='text' className='form-control' value={direccionRecogida} onChange={(e) => {setDireccionRecogida(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='ciudadRecogida' className='form-label'>Ciudad recogida</label>
                        <input type='text' className='form-control' value={ciudadRecogida} onChange={(e) => {setCiudadRecogida(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='nombreDestinatario' className='form-label'>Nombre destinatario</label>
                        <input type='text' className='form-control' value={nombreDestinatario} onChange={(e) => {setNombreDestinatario(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='cedulaDestinatario' className='form-label'>Cédula/NIT destinatario</label>
                        <input type='text' className='form-control' value={cedulaDestinatario} onChange={(e) => {setCedulaDestinatario(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='direccionEntrega' className='form-label'>Dirección entrega</label>
                        <input type='text' className='form-control' value={direccionEntrega} onChange={(e) => {setDireccionEntrega(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='ciudadEntrega' className='form-label'>Ciudad entrega</label>
                        <input type='text' className='form-control' value={ciudadEntrega} onChange={(e) => {setCiudadEntrega(e.target.value)}} />
                    </div>

                    <button onClick={agregarServicio} className='btn btn-success'>Solicitar Servicio</button>
                </div>
            </div>
        </div>
    );
}

export default AgregarServicio;