import React from "react";
import Capamovil from "../components/Capamovil";
import { useParams } from "react-router-dom";
import { docenteinfo } from "../api/SigConec";

function Docente() {
  const { nombre } = useParams();
  const datosdocente = async () => {
    console.log((await docenteinfo(nombre)).data);

    return await docenteinfo(nombre).data
  };

  const Docenteinfo = datosdocente()
  

  return (
    <Capamovil>
      <h1>Bienvenido , { Docenteinfo.nombre }</h1>
    </Capamovil>
  );
}

export default Docente;
