import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../CompStyles.css";

import { Button } from "../../Zhad@Company/fieldUniversal/componentFields/components/Button";
import { FieldUniversal } from "../../Zhad@Company/fieldUniversal/componentFields/FieldUniversal";
import { CardClient } from "./CardClient";
import { FormClient } from "./FormClient";
import { PATH_USER } from "../../../common/config";

export const CompClients = ({ setToastWatch, setToastObj }) => {
  const [dataCliente, setdataCliente] = useState([]);
  const [filterCliente, setfilterCliente] = useState([]);
  const [modalClient, setmodalClient] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (_) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const urlConsult = PATH_USER;
    fetch(urlConsult, requestOptions)
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        setdataCliente(response);
        setfilterCliente(response);
      });
  };

  const createClient = (_) => {
    setmodalClient(true);
  };

  const getValueField = (id, value, isValid) => {
    const filClient = value.toLowerCase();
    const search = dataCliente.filter((item) => {
      const arrValue = item.identificacion.toLowerCase();
      const result = arrValue?.includes(filClient);
      return result;
    });
    setfilterCliente(search);
  };

  return (
    <>
      {modalClient ? (
        <FormClient
          setToastWatch={setToastWatch}
          setToastObj={setToastObj}
          setmodalClient={setmodalClient}
        />
      ) : (
        <div className="containerComp">
          <div className="btnCreateComp">
            <Button
              onClick={createClient}
              variant="contained"
              nameBtn="Crear cliente"
              style={{ minWidth: "300px" }}
            />
          </div>
          <div className="filterComp">
            <FieldUniversal
              key={"Search"}
              id={"Search"}
              label={"Buscar por numero de documento"}
              type={"text"}
              maxlength={20}
              minStr={0}
              maxStr={20}
              getValue={getValueField}
            />
          </div>
          <div className="listComp">
            {filterCliente &&
              filterCliente.map((obj) => (
                <div
                  key={obj.identificacion}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "9px",
                  }}
                >
                  <CardClient
                    data={obj}
                    setToastWatch={setToastWatch}
                    setToastObj={setToastObj}
                    getUsers={getUsers}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

CompClients.propTypes = {};
