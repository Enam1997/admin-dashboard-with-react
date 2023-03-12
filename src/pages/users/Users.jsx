import React, { useState } from "react";
import "./users.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userData } from "../../sampleData";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState(userData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userNamaePhoto">
            <img src={params.row.avatar} alt="" className="userImage" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "transaction",
      headerName: "TranSaction",
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
            <Link to={"/user/" + params.row.id}>
              <button className="userEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="users">
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={30}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
