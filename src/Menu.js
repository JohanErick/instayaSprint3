import React from 'react';

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">InstaYa</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">              
              <li className="nav-item">
                <a className="nav-link active" href="../agregarservicio">Solicitar Servicio</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="../listaservicios">Listar Servicios</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../listausuarios">Listar Usuarios</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Salir</a>
              </li>            
            </ul>           
          </div>
        </div>
      </nav>
    );
}

export default Menu;