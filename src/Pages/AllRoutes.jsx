import React from "react";
import {Route,Routes} from "react-router-dom"
import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import Login from "./Login";
import Users from "./Users";
import UsersPage from "./UsersPage";

const AllRoutes = () => {
  return (
    <div>
      AllROute
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/users/:id" element={<PrivateRoute><UsersPage/></PrivateRoute>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AllRoutes;
