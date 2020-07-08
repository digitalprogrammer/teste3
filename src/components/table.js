import React from "react";
import { Link } from "react-router-dom";

export const Table = ({ clients, deleteClient, editClient }) => {
  const clientes = clients.map((client, index) => (
    <tr key={index}>
      <td>{client.cpf}</td>
      <td>{client.nome}</td>
      <td>{client.sexo}</td>
      <td>{client.dat_nasc}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>{client.id}</td>
      <td>
        <Link to="/edit">
          <button
            onClick={() => editClient(client)}
            className="btn btn-primary"
          >
            Edit
          </button>
        </Link>
        <button
          onClick={() => deleteClient(client.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="container">
      <div className="card">
        <h5 className="card-header">Clients List</h5>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th className="pl-5">CPF</th>
                <th className="pl-5">Name</th>
                <th className="pl-5">Gender</th>
                <th className="pl-5">Date</th>
                <th className="pl-5">Email</th>
                <th className="pl-5">Phone</th>
                <th className="pl-5">Id</th>
              </tr>
            </thead>
            <tbody>{clientes}</tbody>
          </table>
        </div>
      </div>
      <Link to="/create">
        <button className="btn btn-success">Create Client</button>
      </Link>
    </div>
  );
};
