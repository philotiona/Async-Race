import { useEffect, type ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Garage from "./pages/garage/Garage";
import Winners from "./pages/winners/Winners";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { fetchGarage } from "./api/garageThunk";
import {type AppDispatch } from "./store/store";

export default function App(): ReactNode {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchGarage())
  }, [dispatch])
  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Garage/>}/>
        <Route path="/winners" element={<Winners/>}/>
      </Routes>
    
    </>
  )
}