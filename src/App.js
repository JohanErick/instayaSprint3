import './App.css';
import Login from './Login';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaServicios from './ListaServicios';
import AgregarServicio from './AgregarServicio';
import EditarServicio from './EditarServicio';

function App() {

  return (
    <div className="App">      

      <BrowserRouter>
        <Routes>
          <Route path='/listausuarios' element={<ListaUsuarios />} exact ></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario />} exact ></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario />} exact ></Route> 
          <Route path='/' element={<Login />} exact ></Route>
          <Route path='listaservicios' element={<ListaServicios />} exact ></Route>
          <Route path='/agregarservicio' element={<AgregarServicio />} exact ></Route>
          <Route path='/editarservicio/:idservicio' element={<EditarServicio />} exact ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
