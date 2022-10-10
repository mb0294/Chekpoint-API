import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardi from "../Card/cardi";

const CardList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {data.map((el) => (
        <Cardi el={el} key={el.id} />
      ))}
    </div>
  );
};

export default CardList;
