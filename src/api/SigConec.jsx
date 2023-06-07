import axios from "axios";

export const logindocente =  async(datos)=>{
    const data = await axios.post("http://localhost:5000/api/Iniciarseccion",datos)
    return data
}
export const docenteinfo= async(docente)=>{
    const data = await axios.get(`http://localhost:5000/api/docente/${docente}`)
    return data
}