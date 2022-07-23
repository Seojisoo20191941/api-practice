import React, { useEffect, useState } from "react";
// import { Fragment } from "react";
import styled from "styled-components";
// import data from "./data.json";
import "./Box.css";
// import { useParams } from "react-router-dom";
import axios from "axios";

const StyledBox = styled.button`
  border: 1px solid transparent;
  width: 30vh;
  height: 30vh;
  font-size: 15px;
  background-color: white;
  overflow: hidden;
  margin: 0vh 2vh 2vh 0vh;
  text-align: left;
`;

const BoxAxios = () => {
  // const params = useParams;
  const [products, setProducts] = useState(null);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://5adedbdb-52a5-48a5-960a-b2a5e7ad2c25.mock.pstmn.io/products"
      );
      //   .then((response) => {
      //     console.log(response.data);
      //     return response.data.json();
      //   })
      setProducts(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {products &&
        products.map((product) => (
          <StyledBox key={product.id}>
            <img src={product.img} alt="#"></img>
            <div>
              <p>
                <b>{product.title}</b>
              </p>
              <p className="address">{product.address}</p>
              <p className="price">{product.price}</p>
            </div>
          </StyledBox>
        ))}
    </>
  );
};

export default BoxAxios;
