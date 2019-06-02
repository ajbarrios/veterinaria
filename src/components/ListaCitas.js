import React from "react";
import uuid from "uuid";
import PropTypes from 'prop-types';
import Cita from "./Cita";

const ListaCitas = ({ citas, eliminarCita }) => {
  const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';
   return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>
        <div className="lista-citas">
          {citas.map(cita => <Cita key={uuid()} eliminarCita={eliminarCita} cita={cita}/>)}
        </div>
      </div>
    </div>
  );
};

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
};

export default ListaCitas;
