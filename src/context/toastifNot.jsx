import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastifycontext = createContext();

export const useNotifi = () => {
  const notificacion = useContext(toastifycontext);
  return notificacion;
};

export const NotifyProvider = ({ children }) => {
 
  const position = toast.BOTTOM_LEFT;
  const succesnotify = (message) => {
    toast.success(message, { position });
  };
  const errornotify = (message) => {
    toast.error(message, { position });
  };
  const advertencianotify = (message) => {
    toast.warn(message, { position });
  };
  const infornotify = (message) => {
    toast.info(message, { position });
  };
  return (
    <toastifycontext.Provider
      value={(succesnotify, errornotify, advertencianotify, infornotify)}
    >
      {children}
      <ToastContainer/>
    </toastifycontext.Provider>
  );
};
