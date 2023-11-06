import React from "react";

const UserForm = ({ data, updateField }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
          value={data.name}
          onChange={({ target }) => updateField("name", target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="name">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu Email"
          required
          value={data.email}
          onChange={({ target }) => updateField("email", target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
