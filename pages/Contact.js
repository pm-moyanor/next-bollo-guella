import React from "react";

const Contact = () => {
  return (
    <div>
       <h3> Bollo Güella</h3>
      <div>
        <p>123 Calle Demo</p>
        <p>Maipu, Mendoza.</p>
      </div>
      <div>
        <p>Regístrate con tu dirección de correo electrónico para recibir noticias y actualizaciones.</p>
        <form>
            <input type="text" placeholder="Correo electrónico"></input>
            <button>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
