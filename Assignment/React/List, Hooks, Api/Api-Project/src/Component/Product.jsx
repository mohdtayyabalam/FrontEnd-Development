import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);

  const fetching = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProduct(res.data.products);
    });
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <h1>List of Products::</h1>

      <table border={1} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {product.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.brand}</td>
                <td>{item.description}</td>
                <td><img src={item.images[0]} alt="" style={{height:"100px", width:'100px'}}/></td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
