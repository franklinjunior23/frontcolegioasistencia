import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Docente from "./views/Docente";
import Errorpage from "./views/Errorpage";
import Privateroute from "./routes/Privateroute";
import { Authprovider } from "./context/useAuth";

function App() {
  return (
    <Authprovider>
      <Routes>
        <Route path="/" index element=<Home /> />
        <Route path="/Login" element=<Login /> />
        <Route element={<Privateroute />}>
          <Route path="/Docente">
            <Route path=":nombre" element={<Docente />} />
          </Route>
        </Route>
        <Route path="*" element=<Errorpage /> />
      </Routes>
    </Authprovider>
  );
}

export default App;
