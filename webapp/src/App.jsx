import "./App.css";
import React, { useEffect, useState } from "react";

import { Splash } from "./components/Zhad@Company/splash/Splash";
import { ToastNotify } from "./components/Zhad@Company/toastNotify/ToastNotify";

/// VIEWS COMPONENT PAGES
import { CompClients } from "./components/CompViewCelsia/client/CompClients";
import { CompServices } from "./components/CompViewCelsia/services/CompServices";

const App = () => {
  const [loading, setloading] = useState(true);
  const [toastWatch, setToastWatch] = useState(false);
  const [viewChange, setviewChange] = useState(null);
  const [toastObj, setToastObj] = useState({ type: "", msn: "" });

  const CLIENT = "client";
  const SERVICE = "service";
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (toastWatch) {
      setTimeout(() => {
        setToastWatch(false);
        setToastObj(null);
      }, 5000);
    }
  }, [toastWatch]);

  return (
    <>
      {loading && <Splash />}
      <div className="containerApp">
        <div className="menuApp">
          <label
            className={"labelBtnCls"}
            htmlFor=""
            onClick={() => setviewChange(CLIENT)}
          >
            Clientes
          </label>
          <label
            className={"labelBtnCls"}
            htmlFor=""
            onClick={() => setviewChange(SERVICE)}
          >
            Servicios
          </label>
        </div>
        <div className="titleApp">
          <label htmlFor="">PRUEBA CELSIA</label>
        </div>
        <div className="bodyApp">
          {toastWatch && (
            <ToastNotify type={toastObj.type} message={toastObj.msn} />
          )}
          {viewChange === CLIENT ? (
            <CompClients
              setToastWatch={setToastWatch}
              setToastObj={setToastObj}
            />
          ) : viewChange === SERVICE ? (
            <CompServices
              setToastWatch={setToastWatch}
              setToastObj={setToastObj}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default App;
