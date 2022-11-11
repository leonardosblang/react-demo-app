import React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import Update from "../pages/Update";
import Delete from "../pages/Delete";
import Get from "../pages/Get";
import GetEmailAddress from "../pages/GetEmailAddress/index";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Create />} />
      <Route exact path="/get" element={<Get />} />
      <Route exact path="/getemailaddress" element={<GetEmailAddress />} />
      <Route exact path="/delete" element={<Delete />} />
      <Route exact path="/update" element={<Update />} />
    </Routes>
  );
}
