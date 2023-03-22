import React, { useRef } from "react";
import "../styles/Login.scss";

import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  // crear una referencia con un valor:
  const form = useRef(null);

  // el ref={form} en la etiqueta form indica que hacemos referencia a ese formulario

  // funcion para manejar el submit del formulario, va a ser una forma mas amigable para comunicar los datos con el backend cuando llegue el momento de hacerlo
  // usaremos formData que es parte de JS y nos permite instanciar todos los elementos dentro de un formulario y los caaptura conforme sean llenados, y cuando le den a submit los va a tener presentes y con los datos podemos hacer lo que queramos, tbn podemos enviar el objeto que se genera con formData al backend, asi va de forma mas segura y encriptada.

  const handleSubmit = (e) => {
    e.preventDefault();
    // el current sisgnifica "lo que actualmente hace referencia al formulario"
    // para obtener los valores de los inputs tenemos que basarnos en el atributo name de las etiquetas input
    const formData = new FormData(form.current);
    const objeto = {
      // el get obtiene el valor del input que tiene el nombre pasado por parametro
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(objeto);
  };

  // Entonces... que hace handleSubmit? Genera un formData con la info contenida en la referencia creada hacia form, por lo tanto va a escuchar cada uno de los inputs, extrae el valor de name, y con eso traerlos para llamarlos.

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="login-logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="email@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
