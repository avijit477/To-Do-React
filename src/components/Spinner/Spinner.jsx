import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderWrapper } from "./Spinner.style";

const Spinner = ({ type, color, height, width }) => {
  return (
    <LoaderWrapper>
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={3000} //3 secs
      />
    </LoaderWrapper>
  );
};

export default Spinner;
