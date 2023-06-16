import React from "react";
import Image from "next/image";

const Menu = () => {
  return (
    <div>
      <div>
        <p>La panaderia</p>
        <p>
          Descubre nuestra selección de panes y pastelería disponible para
          llevar y para envío a domicilio.
        </p>
        <button>Pedir ahora</button>
      </div>
      <div>
        <ul>
          <li>
            <Image src="/bollo-guella-logo.png" width={100} height={100} />
            <h4>Pan rústico</h4>
            <p>Harina francesa, harina japonesa, huevo, manteca de Isigny</p>
          </li>
          <li>
            <Image src="/bollo-guella-logo.png" width={100} height={100} />
            <h4>Rollo de canela</h4>
            <p>Harina francesa, huevo, manteca de Isigny, canela</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
