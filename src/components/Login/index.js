import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import "./login.css";

const Login = () => {
  const [, navigate] = useLocation();
  const [username, setUsername] = useState({ username: "", password: "" });
  const { isLogged, login, isLoginLoading } = useUser();

  useEffect(() => {
    if (isLogged === true) navigate("/");
  }, [isLogged]);

  const handleChange = (event) => {
    setUsername({
      ...username,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login({ username });
  };

  return (
    <>
      {isLoginLoading ? (
        <h5>Chequeando credencial....</h5>
      ) : (
        <>
          {
           isLogged?(
           <h4>Inicio Exitoso</h4>
           ):(
               <>
            <form className="form" onSubmit={onSubmit}>
              <label>
                Usuario
                <input
                  value={username.username}
                  onChange={handleChange}
                  name="username"
                  placeholder="usuario"
                  required
                />
              </label>
              <label>
                Contraseña
                <input
                  value={username.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="contraseña"
                  required
                />
              </label>
              <button type="submit" className="btn">
                Iniciar
              </button>
            </form>
               </>
           )
          }
        </>
      )}
    </>
  );
};

export default Login;
