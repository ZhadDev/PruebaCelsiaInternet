import React from "react";
import PropTypes from "prop-types";
import "./fontello/css/fontello.css";

/* ICONOS DESCARGADOS DE FONTELLO PARA EL PROYECTO */
/*
en la imagen de icons.png estan los iconos que se pueden usar, si deseas mas puedes descargar una nueva plantilla de fontello.com

*/

export const Zsvg = ({
  onClick,
  icon = "user-secret",
  fontSize = "32pt",
  color = "#d57611",
  style = {},
  clasess = "",
}) => {
  return (
    <>
      <i
        onClick={onClick}
        className={`icon-${icon} ${clasess}`}
        style={{ fontSize: fontSize, color: color, ...style }}
      />
    </>
  );
};

Zsvg.propTypes = {
  icon: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};
