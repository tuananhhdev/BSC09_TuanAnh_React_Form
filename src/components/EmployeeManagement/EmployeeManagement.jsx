import React, { Component } from "react";
import FormLogin from "./FormLogin"
import ListEmployee from "./ListEmployee";

export default class EmployeeManagement extends Component {
  render() {
    return (
      <div>
        <FormLogin />
        <ListEmployee />
      </div>
    );
  }
}
