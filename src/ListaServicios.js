import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServicioIndividual from './ServicioIndividual';
import Menu from './Menu';

function ListaServicios() {

    const [dataservicios, setdataservicio] = useState([]);


    useEffect(() => {
        axios.get('api/servicio/obtenerservicios')
        .then(res => {
            console.log(res.data);    
            setdataservicio(res.data);        
        })
        .catch(err => {
            console.log(err);
        });
    }, []);


    // Mapear lista de servicios en objeto servicio
    const listaservicios = dataservicios.map(servicio => {
        return (
            <div>
                <ServicioIndividual servicio={servicio} />
            </div>
        );
    });


    return (
        <div>
            <Menu />
            <h2>Lista de Servicios</h2>
            {listaservicios}
        </div>
    );
}

export default ListaServicios;