import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Garage from "./pages/garage/Garage";
import Winners from "./pages/winners/Winners";
import Header from "./components/Header/Header";

export default function App(): ReactNode {
  return(
    <Routes>
      <Header/>
      <Route path="/garage" element={<Garage/>}/>
      <Route path="/winners" element={<Winners/>}/>
    </Routes>
  )
}