import React from "react";
import { Link } from "react-router-dom";

export const Form = ({ takeClient, client, handleSubmit, handleChange }) => {
  const handleClient = (client) => {
    takeClient(client);
  };
  return (
    <div className="card">
      <h5 className="card-header">Add/Update Client</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o CPF"
              id="cpf"
              value={client.cpf}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o Nome"
              id="nome"
              value={client.nome}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">Sexo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o Sexo"
              id="sexo"
              value={client.sexo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">Date</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o Date"
              id="dat_nasc"
              value={client.dat_nasc}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o Email"
              id="email"
              value={client.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite o Phone"
              id="phone"
              value={client.phone}
              onChange={handleChange}
            />
          </div>

          <button
            onClick={() => handleClient(client)}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
          <Link to="/">
            <button className="btn btn-secondary">Home</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
