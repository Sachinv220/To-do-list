/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Http404 = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/to-do-list");
  }, []);
  return <></>;
};

export default Http404;
