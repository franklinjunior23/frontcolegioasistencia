import React, { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import { logindocente } from "../api/SigConec";

export default function Formsign() {
  const [usuarioconectado, setusuarioconectado] = useState(false);
  const [nombreusuario, setnombreusuario] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigaterot = useNavigate();

  useEffect(() => {
    if (usuarioconectado) {
      <Navigate to={`/Docente/${nombreusuario}`} />;
    }
    if (isAuthenticated) {
      <Navigate to={`/Docente/${nombreusuario}`} />;
    }
  }, [usuarioconectado, login, navigaterot, nombreusuario]);
  return (
    <div>
      <Formik
        initialValues={{
          usuario: "",
          contraseña: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const respuesta = await logindocente(values);
            if (
              respuesta.data.msg == "Ingrese de manera correcta su contraseña"
            ) {
              toast.error("Ingrese de manera correcta su contraseña");
            } else if (
              respuesta.data.msg == "Ingrese de manera correcta sus datos"
            ) {
              toast.error("Ingrese de manera correcta sus datos");
            } else if (respuesta.data.msg == "Datos Correctos") {
              toast.success(`Usuario Iniciado ${respuesta.data.nombre}`);
              setnombreusuario(respuesta.data.persona);

              setTimeout(() => {
                setusuarioconectado(true);
              }, 3000);
              login();
            }
          } catch (error) {
            toast.warn(
              "Error en el Servidor , comuniquese con el Administrador"
            );
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label className="block text-white text-lg my-2 tracking-wide	">
              Usuario
            </label>
            <input
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="usuario"
              placeholder="Ingrese su usuario"
              onChange={handleChange}
              value={values.usuario}
            />
            <label className="block text-white text-lg my-2 tracking-wide	">
              Contraseña
            </label>
            <input
              name="contraseña"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ingrese su contraseña"
              onChange={handleChange}
              value={values.contraseña}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold px-10 py-4 mt-6 rounded-xl text-xl "
              disabled={isSubmitting}
            >
              {isSubmitting ? "Comprobando ...." : "Iniciar Seccion"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
