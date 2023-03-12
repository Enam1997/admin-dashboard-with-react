import React, { useState } from "react";
import "./products.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productData } from "../../sampleData";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(productData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.image} alt="" className="productImage" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Products;
