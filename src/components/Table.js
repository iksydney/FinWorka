import { Typography } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import Table from "react-bootstrap/Table";

export default function TableData() {
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <Typography variant="h5">Books Table</Typography>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Books</th>
            <th>Author</th>
            <th>Comment Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <a className="btn btn-primary">
                <i className="bi bi-pen"></i>Comments
              </a>
              <a className="btn btn-primary">Charts</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
