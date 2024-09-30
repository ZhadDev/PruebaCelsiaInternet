import React from "react";
import PropTypes from "prop-types";
import "../CompStyles.css";
import { Zsvg } from "../../Zhad@Company/zSvg/Zsvg";
import { PATH_SERVICE } from "../../../common/config";

export const CardService = ({
  data,
  setToastWatch,
  setToastObj,
  getServices,
}) => {
  const {
    fechaInicio,
    identificacion,
    servicio,
    ultimaFacturacion,
    ultimoPago,
  } = data;

  const deleteService = (id, service) => {
    const dataJson = { id, service };
    const data = JSON.stringify(dataJson);
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const urlConsult = `${PATH_SERVICE}/${id}/${service}`;
    fetch(urlConsult, requestOptions)
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        debugger;
        if (response.success === false) {
          setToastWatch(true);
          setToastObj({
            type: "error",
            msn: "No se puede eliminar. El ciente tiene asociado servicios.",
          });
        } else {
          if (response.deleted) {
            getServices();
            setToastWatch(true);
            setToastObj({
              type: "success",
              msn: "Servicio eliminado exitosamente.",
            });
          }
        }
      });
  };

  const styleIconCard = {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "20px",
  };

  const styleContCard = {
    display: "grid",
    gridTemplateColumns: "30px auto",
    columnGap: "12px",
    padding: "5px 0px 5px 0px",
  };
  return (
    <div
      className="cardClient"
      style={{ border: "2px solid #1a4870", borderRadius: "12px" }}
    >
      <div className="cardClient-info">
        <div style={styleContCard}>
          <Zsvg icon="address-card" color="#1a4870" style={styleIconCard} />
          <label
            style={{ letterSpacing: "1px" }}
            htmlFor=""
          >{`${identificacion}`}</label>
        </div>
        <div style={styleContCard}>
          <Zsvg icon="th" color="#1a4870" style={styleIconCard} />
          <label style={{ letterSpacing: "1px" }} htmlFor="">
            {servicio}
          </label>
        </div>
        <div style={styleContCard}>
          <Zsvg icon="calendar" color="#1a4870" style={styleIconCard} />
          <label style={{ letterSpacing: "1px" }} htmlFor="">
            {`${fechaInicio} - ${ultimaFacturacion}`}
          </label>
        </div>
        <div style={styleContCard}>
          <Zsvg icon="basket" color="#1a4870" style={styleIconCard} />
          <label style={{ letterSpacing: "1px" }} htmlFor="">
            {ultimoPago}
          </label>
        </div>
      </div>
      <div onClick={() => deleteService(identificacion, servicio)}>
        <Zsvg icon="trash" color="#1a4870" />
      </div>
    </div>
  );
};

CardService.propTypes = {};
