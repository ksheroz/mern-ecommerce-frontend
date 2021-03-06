import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import AdminNav from "../../../components/nav/AdminNav";

import { useSelector } from "react-redux";
import {
  createProduct,
  getAllBrands,
  getAllColors,
} from "../../../functions/product";

import QuantityTable from "./QuantityTable";
import { getCategories } from "../../../functions/category";

import ProductForm from "../../../components/forms/ProductForm";

const initialValues = {
  articleNo: "",
  title: "",
  description: "",
  price: "",
  discount: "",
  category: "",
  subs: [],
  images: [],
  brand: "",
};

function ProductCreate() {
  const [values, setValues] = useState(initialValues);
  const [quantity, setQuantity] = useState([]);

  // destructure
  const {
    articleNo,
    title,
    description,
    price,
    discount,
    category,
    subs,
    images,
    brand,
  } = values;

  return (
    <>
      <Row>
        <Col sm={{ span: 4, offset: 0 }} xs={{ span: 0, offset: 0 }}>
          <AdminNav />
        </Col>
        <Col
          sm={{ span: 12, offset: 2 }}
          xs={{ span: 20, offset: 2 }}
          style={{ marginTop: "1.5rem" }}
        >
          <ProductForm
            values={values}
            setValues={setValues}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </Col>
      </Row>
    </>
  );
}

export default ProductCreate;
