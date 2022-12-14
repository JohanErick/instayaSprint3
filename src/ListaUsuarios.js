import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioIndividual';
import Menu from './Menu';

function ListaUsuarios() {

    const [datausuarios, setdatausuario] = useState([]);


    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios')
        .then(res => {
            console.log(res.data);    
            setdatausuario(res.data);        
        })
        .catch(err => {
            console.log(err);
        });
    }, []);


    // Mapear lista de usuarios en objeto usuario
    const listausuarios = datausuarios.map(usuario => {
        return (
            <div>
                <UsuarioIndividual usuario={usuario} />
            </div>
        );
    });


    return (
        <div>
            <Menu />
            <h2>Lista de Usuarios</h2>
            {listausuarios}
        </div>
    );
}

export default ListaUsuarios;