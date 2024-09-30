import React from "react";
import PropTypes from "prop-types";
import "../CompStyles.css";
import { Zsvg } from "../../Zhad@Company/zSvg/Zsvg";
import { PATH_USER } from "../../../common/config";

export const CardClient = ({ data, setToastWatch, setToastObj, getUsers }) => {
  const {
    identificacion,
    nombres,
    apellidos,
    tipoIdentificacion,
    numeroCelular,
    correoElectronico,
  } = data;

  const deleteClient = (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const urlConsult = `${PATH_USER}/${id}`;
    fetch(urlConsult, requestOptions)
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        if (response.success === false) {
          setToastWatch(true);
          setToastObj({
            type: "error",
            msn: "No se puede eliminar. El ciente tiene asociado servicios.",
          });
        } else {
          if (response.deleted) {
            getUsers();
            setToastWatch(true);
            setToastObj({
              type: "success",
              msn: "Usuario eliminado exitosamente.",
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
          <Zsvg
            icon="address-card"
            color="#1a4870"
            fontSize="20"
            style={styleIconCard}
          />
          <label
            style={{ letterSpacing: "1px" }}
            htmlFor=""
          >{`${tipoIdentificacion} : ${identificacion}`}</label>
        </div>
        <div style={styleContCard}>
          <Zsvg icon="user-1" color="#1a4870" style={styleIconCard} />
          <label style={{ letterSpacing: "1px" }} htmlFor="">
            {`${nombres} ${apellidos}`}
          </label>
        </div>
        <div style={styleContCard}>
          <Zsvg icon="mobile" color="#1a4870" style={styleIconCard} />
          <label style={{ letterSpacing: "1px" }} htmlFor="">
            {numeroCelular}
          </label>
        </div>
        <div style={styleContCard}>
          <Zsvg icon="mail-3" color="#1a4870" style={styleIconCard} />
          <label style={{ letterSpacing: "1px" }} htmlFor="">
            {correoElectronico}
          </label>
        </div>
      </div>
      <div onClick={() => deleteClient(identificacion)}>
        <Zsvg icon="trash" color="#1a4870" />
      </div>
    </div>
  );
};

CardClient.propTypes = {};
