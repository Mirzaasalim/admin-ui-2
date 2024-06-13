import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Salim", firstName: "Mirza", age: 21 },
  { id: 2, lastName: "Safitro", firstName: "Ilham", age: 19 },
  { id: 3, lastName: "Arya", firstName: "Kevin", age: 20 },
  { id: 4, lastName: "Priyo", firstName: "Alvin", age: 16 },
  { id: 5, lastName: "Alfatir", firstName: "Dimas", age: null },
  { id: 6, lastName: "Meli", firstName: null, age: 53 },
  { id: 7, lastName: "Ferdiansyah", firstName: "Farid", age: 44 },
  { id: 8, lastName: "Valen", firstName: "Rossi", age: 36 },
  { id: 9, lastName: "Rivandi", firstName: "Septyan", age: 65 },
];

const Datatable = () => {
  const location = useLocation();
  const type = location.pathname.split('/')[1];

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to={"/" + type + "/test"} style={{ textDecoration: "none" }}>
            <span className="viewButton">View</span>
          </Link>
        </div>
      );
    },
  },
];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {type.toUpperCase()}
        <Link to={"/" + type + "/new"} className="link">
          Add New
        </Link>
      </div>
      <DataGrid className="datagrid" 
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
