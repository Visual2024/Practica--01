import {
  Twitter,
  Instagram,
  Facebook,
  Whassap,
} from "../../../assets/icos/redes";
import {
  Bradicor,
  Visa,
  DinnerClub,
  AmericaExpress,
  Naranja,
  MercadoPago,
} from "../../../assets/icos/m_pagos";

// Optimizacion de codigo
export function Footer() {
  const redesSociales = [
    { icon: <Twitter width={24} height={24} />, name: "Twitter" },
    { icon: <Instagram width={24} height={24} />, name: "Instagram" },
    { icon: <Facebook width={24} height={24} />, name: "Facebook" },
    { icon: <Whassap width={24} height={24} />, name: "Whassap" },
  ];

  const metodosPagos = [
    { icon: <Bradicor width={24} height={24} />, name: "Twitter" },
    { icon: <Visa width={24} height={24} />, name: "Instagram" },
    { icon: <DinnerClub width={24} height={24} />, name: "Facebook" },
    { icon: <AmericaExpress width={24} height={24} />, name: "Whassap" },
    { icon: <Naranja width={24} height={24} />, name: "Whassap" },
    { icon: <MercadoPago width={24} height={24} />, name: "Whassap" },
  ];

  const renderItems = (items) => {
    return items.map((item) => <div key={item.name}>{item.icon}</div>);
  };

  return (
    <footer className="bg-red-600">
      <div className="flex flex-row flex-wrap justify-evenly">
        <div>
          <h3 className="text-center mb-4 text-[1.5rem] f">Seguinos</h3>
          <div className="flex flex-row flex-wrap justify-between gap-2 ">
            {renderItems(redesSociales)}
          </div>
        </div>
        <div>
          <h3 className="text-center text-[1.5rem] f">Medios de Pagos</h3>
          <div className="grid grid-cols-4 justify-items-center ">
            {renderItems(metodosPagos)}
          </div>
        </div>
        {/* Otras secciones... */}
      </div>
    </footer>
  );
  // Hacer lo mismo para los medios de pagos
}
