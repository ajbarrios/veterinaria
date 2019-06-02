import React, { Component } from "react";
import PropTypes from 'prop-types';

import uuid from "uuid";
const stateInicial = {
  error: false,
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  }
};

class NuevaCita extends Component {
  state = {...stateInicial}

  handleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    if (!mascota || !propietario || !fecha || !hora || !sintomas) {
      this.setState({
        error: true
      });
      return;
    }
    const nuevaCita = { id: uuid(), ...this.state.cita };
    this.props.crearNuevaCita(nuevaCita);
    this.setState({...stateInicial});
  };

  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Rellena el formulario para crear una nueva cita
          </h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  value={this.state.cita.mascota}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  name="propietario"
                  value={this.state.cita.propietario}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  value={this.state.cita.fecha}
                  onChange={this.handleChange}
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  value={this.state.cita.hora}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe los sintomas"
                  value={this.state.cita.sintomas}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired
};

export default NuevaCita;
