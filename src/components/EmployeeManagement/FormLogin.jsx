import React, { Component, useMemo } from "react";
import FormLogin from "./FormLogin";
import ListEmployee from "./ListEmployee";

export default class QuanLySinhVien extends Component {
  render() {
    return (
      <div>
        <FormLogin />
        <ListEmployee />
      </div>
    );
  }
}
