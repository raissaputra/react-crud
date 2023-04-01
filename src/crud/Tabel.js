import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({makanan}) => {
  return (
    <div className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO</th>
            <th>Nama Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanan.map((makanan, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.deskripsi}</td>
                <td>{makanan.harga}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
