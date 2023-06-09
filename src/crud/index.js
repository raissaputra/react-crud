import React, { Component } from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: [],
      nama: "",
      deskripsi: "",
      harga: "",
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananTidakDiPilih = this.state.makanan
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => filterMakanan);

      this.setState({
        makanan: [
          ...makananTidakDiPilih,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    

    this.setState({
      nama: "",
      deskripsi: "",
      harga: "",
      id: "",
    });
  };

  editData = (id) => {
    const makananPilih = this.state.makanan
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => filterMakanan);

    this.setState({
      nama: makananPilih[0].nama,
      deskripsi: makananPilih[0].deskripsi,
      harga: makananPilih[0].harga,
      id: makananPilih[0].id,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel makanan={this.state.makanan} editData={this.editData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
