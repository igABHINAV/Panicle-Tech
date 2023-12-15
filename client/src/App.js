import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Graphics from "./Components/Graphics";
import Chart from 'chart.js/auto';

import Table from "./Components/Table";
import UpdateForm from "./Components/UpdateForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  let [Data , setData] = useState([]);
  useEffect(()=>{
    const f = async()=>{
      let res = await fetch("http://localhost:5000/get");
      let data = await res.json();
      setData(data.users);
    };
    f();
  },[])
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/update" element={<UpdateForm />} />
          <Route path="/add" element={<Form />} />
          <Route path="/graphs" element={<Graphics Data = {Data}/>} />
          <Route path="/" element={<Table Data = {Data}/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
