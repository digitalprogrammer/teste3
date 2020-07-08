import React, { useState, useEffect } from "react";
import { Table } from "./components/table";
import { Form } from "./components/form";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const [clients, setClients] = useState([]);
  const [url, seturl] = useState("http://localhost:3001/clientes");
  const [client, setClient] = useState({
    cpf: "",
    nome: "",
    sexo: "",
    dat_nasc: "",
    phone: "",
    email: "",
    phone: "",
  });

  const takeClient = (client) => {
    setClient(client);
  };

  useEffect(() => {
    fetchClient();
  }, [client]);

  const fetchClient = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // if (JSON.stringify(data) !== JSON.stringify(clients)) {
        setClients(data);
        // }
      });
  };

  const deleteClient = (id) => {
    return fetch(url + "/" + id, {
      method: "delete",
    })
      .then((res) => res.json())
      .then(fetchClient())
      .then((data) => console.log(data));
  };

  const handleChange = (e) => {
    setClient({ ...client, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client.id !== undefined) {
      return fetch(url + "/" + client.id, {
        method: "put",
        body: JSON.stringify(client),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then(fetchClient())
        .then(
          setClient({
            cpf: "",
            nome: "",
            sexo: "",
            dat_nasc: "",
            phone: "",
            email: "",
            phone: "",
          })
        );
    } else {
      return fetch(url, {
        method: "post",
        body: JSON.stringify(client),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then(fetchClient())
        .then(
          setClient({
            cpf: "",
            nome: "",
            sexo: "",
            dat_nasc: "",
            phone: "",
            email: "",
            phone: "",
          })
        );
    }
  };

  const editClient = (client) => {
    setClient(client);
  };

  const displayClient = () => {
    return <div className="container"></div>;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => (
            <Table
              editClient={editClient}
              clients={clients}
              deleteClient={deleteClient}
            ></Table>
          )}
        />
        <Route
          path="/edit"
          exact={true}
          render={() => (
            <Form
              takeClient={takeClient}
              client={client}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            ></Form>
          )}
        />
        <Route
          path="/create"
          exact={true}
          render={() => (
            <Form
              takeClient={takeClient}
              client={client}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            ></Form>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
