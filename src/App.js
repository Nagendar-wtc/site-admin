import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAppInitialData } from "./actions/config";
import './App.scss';
import LandingPage from "./components/LandingPage";
import HeaderBanner from "./components/HeaderBanner";
import MenuHeader from "./components/MenuHeader";
import { Route, Routes,useNavigate, Navigate } from "react-router-dom";
import HistoryPage from "./components/HistoryPage";
import { TAB_MENU_OPTIONS } from "./utils/constants";
import HeaderSubPages from "./components/HeaderSubPages";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showConfigurationOverlay, setConfigurationOverlay] = useState(false);
  let navigate=useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppInitialData());
  }, [dispatch])
  const handleTabChange = (event) => {
    console.log("setActiveTab", event.index)
    if (event.index === 0) {
      navigate("/landing-page");
    } else if (event.index === 1) {
      navigate("/history-page");
    }
  };
  return (
    <>
      <HeaderBanner />
      <MenuHeader
        tabOptions={TAB_MENU_OPTIONS}
        handleChange={handleTabChange}
        showConfigurationOverlay={showConfigurationOverlay}
        setConfigurationOverlay={setConfigurationOverlay}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/landing-page" />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/history-page" element={<HistoryPage />} />
        <Route path="/Profile" element={<HeaderSubPages id="Profile" page="Profile" />} />
        <Route path="/AboutUs" element={<HeaderSubPages id="AboutUs" page="About Us" />} />
        <Route path="/Help" element={<HeaderSubPages id="Help" page="Help" />} />
      </Routes>
      <ToastContainer />
    </>
  )
};

export default App;

