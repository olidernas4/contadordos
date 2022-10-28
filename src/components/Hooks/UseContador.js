import { useState } from "react";
export const UseContador = () => {
  const [data, setData] = useState(0);
  const Aumentar = () => {
    setData(data + 1);
  };
  const Disminuir = () => {
    if (data < 0) {
      setData(0);
    } else {
      setData(data - 1);
    }
  };
  const Reset = () => {
    setData(0);
  };

  return {
    Aumentar,
    Disminuir,
    Reset,
    data,
    setData,
  };
};
