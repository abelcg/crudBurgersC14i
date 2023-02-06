import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../../../config/axiosInit"

const Product = ({ product, URL, getApi }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.productName}</td>
      <td>${product.price}</td>
      <td>
        <p className="truncate-img-link m-0">{product.urlImg}</p>
      </td>
      <td>{product.category}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link
            to={`/product/edit/${product.id}`}
            className="btn-orange mx-1 text-decoration-none text-center"
          >
            Update
          </Link>
          <button
            className="btn-red mx-1"
           // onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Product;
