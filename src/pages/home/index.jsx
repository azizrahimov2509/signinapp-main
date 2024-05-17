import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

function Home() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    const formattedRows = usersData.map((user, index) => ({
      id: index + 1,
      firstName: user.name,
      surname: user.surname,
      age: user.age,
      login: user.login,
      password: user.password,
      fullName: `${user.name} ${user.surname}`,
    }));
    setRows(formattedRows);
  };

  const handleDeleteIndividual = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    updateLocalStorage(updatedRows);
  };

  const handleDeleteAll = () => {
    setRows([]);
    localStorage.removeItem("usersData");
  };

  const updateLocalStorage = (updatedRows) => {
    localStorage.setItem(
      "usersData",
      JSON.stringify(
        updatedRows.map((row) => ({
          name: row.firstName,
          surname: row.surname,
          age: row.age,
          login: row.login,
          password: row.password,
        }))
      )
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "surname", headerName: "Surname", width: 130 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "login", headerName: "Login", width: 130 },
    { field: "password", headerName: "Password", width: 130 },
    { field: "fullName", headerName: "Full name", width: 180, sortable: false },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 125,
      renderCell: (params) => (
        <Button
          style={{ fontSize: "18px" }}
          variant="outlined"
          color="error"
          onClick={() => handleDeleteIndividual(params.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        marginTop: "25px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleDeleteAll}
        style={{ marginBottom: "20px" }}
      >
        Delete All
      </Button>
      <DataGrid
        style={{ fontSize: "20px", fontWeight: "600" }}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { page: 0, pageSize: 7 },
        }}
      />
    </div>
  );
}

export default Home;
